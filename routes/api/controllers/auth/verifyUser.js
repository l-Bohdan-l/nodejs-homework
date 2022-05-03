const authService = require('../../../../services/auth');
const {HTTP_STATUS_CODE} = require('../../../../libs/constants.js')

const verifyUser = async (req, res) => {
    const token = req.params.token;
    const user = await authService.verifyUser(token);

    return res.status(HTTP_STATUS_CODE.OK).json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        data: {message: `User verified. Welcome ${user.name}`},
    })
}

module.exports = verifyUser