const User = require('../../schemas/user.js');

const findById = async (id) => {
    return await User.findById(id)
};

module.exports = findById;