const express = require('express');
const router = express.Router();
const {wrapper: wrapperError} = require('../../../../middlewares/errorHandler')

const login = require('./login.js');
const logout = require ('./logout.js');
const registration = require ('./registration');

router.post('/registration', wrapperError(registration));
router.post('/login', wrapperError(login));
router.post('/logout', wrapperError(logout));

module.exports = router;
