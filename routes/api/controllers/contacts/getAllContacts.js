// const express = require('express');
// const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
const {HTTP_STATUS_CODE} = require('../../../../libs/constants.js')

const getAllContacts = async function (req, res, next) {
    const contactsList = await contactsModel.listContacts();
    res.json({
        status: 'succuess',
        code: HTTP_STATUS_CODE.OK,
        payload: { contactsList },
    })
};

module.exports = getAllContacts;