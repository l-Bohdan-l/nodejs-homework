// const express = require('express');
// const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
const { HTTP_STATUS_CODE } = require('../../../../libs/constants.js');
const contactsService = require('../../../../services/contacts')


const deleteContact = async function (req, res) {
    const contact = await contactsService.remove(req.params.contactId, req.user);
    // if (contact) {
        return res.json({
            status: 'succuess',
            code: HTTP_STATUS_CODE.OK,
            message: "contact deleted",
            payload: { contact },
        })
    // } else {
    //     return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
    //         status: 'error',
    //         code: HTTP_STATUS_CODE.NOT_FOUND,
    //         message: "Not found",
    //     })
    // }
};

module.exports = deleteContact;