const User = require('../../schemas/user.js');

const createUser = async (body) => {
    const user = await User(body);

    return await user.save()
};



module.exports = createUser;