const Mailgen = require('mailgen');

class EmailService {
    constructor(sender) {
        this.sender = sender
        this.link = " https://06c6-188-190-68-249.eu.ngrok.io"
        this.mailgen = new Mailgen({
            theme: 'default',
            product: {
                name: 'My App',
                link: this.link,
            }
        })
    }

    createEmailTemplate(username, token) {
        const  email = {
            body: {
                name: 'John Appleseed',
                intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                action: {
                    instructions: 'To get started with Mailgen, please click here:',
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: 'Confirm your account',
                        link: `${this.link}/api/auth/verify/${token}`
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };
        return this.mailgen.generate(email)
    }

    async sendEmail(email, username, token) {
        const emailTemplate = this.createEmailTemplate(username, token)
        const message = {
            to: email,
            subject: 'Welcome to My App',
            html: emailTemplate
        }
        
        const result = await this.sender.send(message)               
        return result

    }
}

module.exports = EmailService