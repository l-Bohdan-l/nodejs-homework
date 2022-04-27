const User = require('../../schemas/user.js');

const updateToken = async (id, token) => {
    return User.findByIdAndUpdate(id, { token })
};

module.exports = updateToken;