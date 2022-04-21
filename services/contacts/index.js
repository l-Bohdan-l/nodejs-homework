const { HTTP_STATUS_CODE } = require("../../libs/constants");
const { CustomError } = require("../../middlewares/errorHandler");
const Contact = require('../../models/contacts');
const SECRET_KEY = process.env.JWT_SECRET_KEY





class ContactsService {
    async getAll(query, user) {
        const contactsList = await Contact.listContacts();
        return contactsList       
    };

    async getById(id, user) { 
        const contact = await Contact.getContactById(id);

        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found');
        }

        return contact
        
    }

    async create(body, user) {
        const contact = await Contact.addContact(body);
        return contact
    }
    
    async update(id, body, user) {
        const contact = await Contact.updateContact(id, body);
        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found')
        }

        return contact
    } 

    async remove(id, user) {
        const contact = await Contact.removeContact(id);
        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found')
        }

        return contact
    }

   
}


module.exports = new ContactsService()