const express = require('express');
const router = express.Router();
const { wrapper: wrapperError } = require('../../../../middlewares/errorHandler');
const guard = require('../../../../middlewares/guard.js');
const upload = require('../../../../middlewares/upload.js');

const {avatar} = require('./avatar.js');

router.patch('/avatar', guard, upload.single('avatar'), wrapperError(avatar));


module.exports = router;
