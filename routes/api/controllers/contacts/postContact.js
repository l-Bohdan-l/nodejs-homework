const express = require('express');
const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
const { contactsSchema } = require('../../../../schemas/contacts-validation-schema.js');
const {validateBody} = require('../../../../middlewares/validation.js')

router.post('/', validateBody(contactsSchema), async (req, res, next) => {
    const contact = await contactsModel.addContact(req.body);
    res.status(201).json({
        status: 'succuess',
        code: 201,
        payload: { contact },
    })
});

module.exports = { router };