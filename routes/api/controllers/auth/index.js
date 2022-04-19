const express = require('express');
const router = express.Router();
const { wrapper: wrapperError } = require('../../../../middlewares/errorHandler');
const guard = require('../../../../middlewares/guard.js');


const login = require('./login.js');
const logout = require ('./logout.js');
const registration = require ('./registration');

router.post('/signup', wrapperError(registration));
router.post('/login', wrapperError(login));
router.post('/logout', guard, wrapperError(logout));

module.exports = router;
