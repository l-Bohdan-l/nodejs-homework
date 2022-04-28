const {HTTP_STATUS_CODE} = require('../../../../libs/constants.js');
const AvatarService = require('../../../../services/avatar/avatarService.js');
const LocalStorage = require('../../../../services/avatar/localStorage.js');




const avatar = async (req, res, next) => {
    const avatarService = new AvatarService(LocalStorage, req.file, req.user);
    const avatarsUrl = await avatarService.update();
    return res.status(HTTP_STATUS_CODE.OK).json({
      status: 'success',
      code: HTTP_STATUS_CODE.OK,
      payload: { avatar: avatarsUrl },
    });
}

module.exports = {avatar}