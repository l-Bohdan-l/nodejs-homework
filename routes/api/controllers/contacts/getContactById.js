const express = require('express');
const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');

router.get('/:contactId', async (req, res, next) => {
    const contact = await contactsModel.getContactById(req.params.contactId);
    if (contact) {
        return res.json({
            status: 'succuess',
            code: 200,
            payload: { contact },
        })
    } else {
        return res.status(404).json({
            status: 'error',
            code: 404,
            message: "Not found",
        })
    }
});

module.exports = { router };