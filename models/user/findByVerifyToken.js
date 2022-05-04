const User = require('../../schemas/user.js');

const findByVerifyToken = async (verifyEmailToken) => {
    return await User.findOne({verifyEmailToken})
};

module.exports = findByVerifyToken;