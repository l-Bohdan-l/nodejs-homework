// const express = require('express');
// const router = express.Router();
const contactsModel = require('../../../../models/contacts/index.js');
const { HTTP_STATUS_CODE } = require('../../../../libs/constants.js');
const contactsService = require('../../../../services/contacts')


const getContactById = async function (req, res, next) {
    const contact = await contactsService.getById(req.params.contactId, req.user);
    // if (contact) {
        return res.json({
            status: 'succuess',
            code: HTTP_STATUS_CODE.OK,
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

module.exports = getContactById;