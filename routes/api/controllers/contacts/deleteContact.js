const express = require('express');
const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');

router.delete('/:contactId', async (req, res, next) => {
    const contact = await contactsModel.removeContact(req.params.contactId);
    if (contact) {
        return res.json({
            status: 'succuess',
            code: 200,
            message: "contact deleted",
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

module.exports = router;