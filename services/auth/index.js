const jwt = require("jsonwebtoken");
const { HTTP_STATUS_CODE } = require("../../libs/constants");
const { CustomError } = require("../../middlewares/errorHandler");
const Users = require('../../models/user');
const SenderNodeMailer = require("../email/senders/nodemailer.sender");
const SenderSendGrid = require("../email/senders/sendgrid.sender");
const EmailService = ('../email/service.js');
 
const SECRET_KEY = process.env.JWT_SECRET_KEY




class AuthService {
    async create(body) {
        const user = await Users.findByEmail(body.email);
        if (user) { 
            throw new CustomError(HTTP_STATUS_CODE.CONFLICT, 'User already exists')
        }        
         
        const newUser = await Users.createUser(body);
        
        const sender = new SenderSendGrid();
        const emailService = new EmailService(sender);
        try {
            await emailService.sendEmail(user.email, user.name, user.verifyEmailToken)            
        } catch (error) {
            console.log(error)            
        }

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            subscription: newUser.subscription,
            avatar: newUser.avatar,
        }
    };

    async current(token) { 
        const user = await Users.findByToken(token);
        
        if (!user) {
            throw new CustomError(
                HTTP_STATUS_CODE.UNAUTHORIZED,
                'Invalid credentials'
            )
        }
        return user
    }

    async login({ email, password }) { 
        const user = await this.getUser(email, password)
        if (!user) {
            throw new CustomError(
                HTTP_STATUS_CODE.UNAUTHORIZED,
                'Invalid credentials'
            )
        }
        const token = this.generateToken(user);
        await Users.updateToken(user.id, token);
        return {token}
    }

    async logout(id) {
        await Users.updateToken(id, null)        
    }
    
    async getUser(email, password) {
        const user = await Users.findByEmail(email);
        
        if (!user) {
            return null
        }

        if (!(await user?.isValidPassword(password))) {
            return null
        }
        
        if (!user?.isVerify) {
            throw new CustomError(HTTP_STATUS_CODE.BAD_REQUEST, 'User not verified')
        }

        return user
    } 

    generateToken(user) {
        const payload = { id: user.id, name: user.name, role: user.role }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })
        return token
    }

    async verifyUser(token) {
        const user = await Users.findByVerifyToken(token);
        if (!user) { 
            throw new CustomError(HTTP_STATUS_CODE.BAD_REQUEST, 'Invalid token')
        }

        if (user && user.isVerify) { 
            throw new CustomError(HTTP_STATUS_CODE.BAD_REQUEST, 'User already verified')
        }

        await Users.verifyUser(user.id)
        return user

     }
    
    async reverifyEmail(email) {
         const user = await Users.findByEmail(email);
        if (!user) { 
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'User with such email not found')
        }

        if (user && user.isVerify) { 
            throw new CustomError(HTTP_STATUS_CODE.BAD_REQUEST, 'User already verified')
        }
        
        const sender = new SenderSendGrid()
        const emailService = new EmailService(sender);
        try {
            await emailService.sendEmail(user.email, user.name, user.verifyEmailToken)            
        } catch (error) {
            console.log(error)
            throw new CustomError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE,
            "Error sending email")
        }
    }
}


module.exports = new AuthService()