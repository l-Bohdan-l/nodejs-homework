const User = require('../../schemas/user.js');

const findByEmail = async (email) => {
    return await User.findOne({email})
};

module.exports = findByEmail;