const User = require('../../schemas/user.js');

const verifyUser = async (id) => {
    return await User.findByIdAndUpdate(id, { isVerify: true})
};

module.exports = verifyUser;