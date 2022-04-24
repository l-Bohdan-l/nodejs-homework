const authService = require('../../../../services/auth');
const {HTTP_STATUS_CODE} = require('../../../../libs/constants.js')

const login = async (req, res) => {
    console.log(req.token)
    const token = await authService.login(req.body);
    return res.status(HTTP_STATUS_CODE.OK).json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        data: {token},
    })
}
module.exports = login;