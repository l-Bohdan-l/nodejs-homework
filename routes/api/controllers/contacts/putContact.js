// const express = require('express');
// const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
// const { contactsSchema, updateContactsSchema } = require('../../../../schemas/contacts-validation-schema.js');
// const {validateBody} = require('../../../../middlewares/validation.js')
const { HTTP_STATUS_CODE } = require('../../../../libs/constants.js');

const putContact = async function (req, res, next) {
    const contact = await contactsModel.updateContact(req.params.contactId, req.body);
  
    if (Object.keys(req.body).length === 0) {
        return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
            status: 'error',
            code: HTTP_STATUS_CODE.BAD_REQUEST,
            message: "missing fields",
        })
    };

    if (contact) {
        return res.json({
            status: 'succuess',
            code: HTTP_STATUS_CODE.OK,
            payload: { contact },
        })
    }
    else {
        return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
            status: 'error',
            code: HTTP_STATUS_CODE.NOT_FOUND,
            message: "Not found",
        })
    }
};

module.exports = putContact;