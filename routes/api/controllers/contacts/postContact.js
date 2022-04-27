// const express = require('express');
// const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
// const { contactsSchema } = require('../../../../schemas/contacts-validation-schema.js');
// const {validateBody} = require('../../../../middlewares/validation.js')
const { HTTP_STATUS_CODE } = require('../../../../libs/constants.js');
const contactsService = require('../../../../services/contacts')


const postContact = async function (req, res) {
    const contact = await contactsService.create(req.body, req.user);
    res.status(HTTP_STATUS_CODE.CREATED).json({
        status: 'succuess',
        code: HTTP_STATUS_CODE.CREATED,
        payload: { contact },
    })
};

module.exports = postContact;