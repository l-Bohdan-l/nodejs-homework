const User = require('../../schemas/user.js');

const findByToken = async (token) => {
    return await User.findOne({token})
};

module.exports = findByToken;