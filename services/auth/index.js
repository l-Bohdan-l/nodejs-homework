const jwt = require("jsonwebtoken");
const { HTTP_STATUS_CODE } = require("../../libs/constants");
const Users = require('../../models/user');
const SECRET_KEY = process.env.JWT_SECRET_KEY;



class AuthService {
    async create(body) { }
    async login({email, password}) { }
    async logout(id) {}
}

module.exports = new AuthService()