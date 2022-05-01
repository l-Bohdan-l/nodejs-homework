const User = require('../../schemas/user.js');


const updateAvatar = async (id, avatar) => {
    return await User.findByIdAndUpdate(id, {avatar})
}

module.exports = updateAvatar