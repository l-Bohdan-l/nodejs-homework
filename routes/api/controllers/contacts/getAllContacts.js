const express = require('express');
const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');

router.get('/', async (req, res, next) => {
    const contactsList = await contactsModel.listContacts();
    res.json({
        status: 'succuess',
        code: 200,
        payload: { contactsList },
    })
});

module.exports = { router };