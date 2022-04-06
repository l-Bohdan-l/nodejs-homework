const contactsModel = require('../../../../models/contacts/index.js');

const updateStatusContact = async function (req, res, next) {
    const contact = await contactsModel.updateContact(req.params.contactId, req.body);
  
    if (Object.keys(req.body).length === 0) {
        return res.status(404).json({
            status: 'error',
            code: 400,
            message: "missing fields",
        })
    };

    if (contact) {
        return res.json({
            status: 'succuess',
            code: 200,
            payload: { contact },
        })
    }
    else {
        return res.status(404).json({
            status: 'error',
            code: 404,
            message: "Not found",
        })
    }
};

module.exports = updateStatusContact;
