const authService = require('../../../../services/auth');
const {HTTP_STATUS_CODE} = require('../../../../libs/constants.js')

const current = async (req, res) => {
    const { email, subscription, token} = req.user;
    console.log(req.user.token)
    const user = await authService.current(token);    

    return res.status(HTTP_STATUS_CODE.OK).json({
      status: 'success',
      code: HTTP_STATUS_CODE.OK,
      user: { email, subscription },
    });
}
module.exports = current;