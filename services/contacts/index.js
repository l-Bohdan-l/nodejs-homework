const { HTTP_STATUS_CODE } = require("../../libs/constants");
const { CustomError } = require("../../middlewares/errorHandler");
const Contact = require('../../models/contacts');
const SECRET_KEY = process.env.JWT_SECRET_KEY





class ContactsService {
    async getAll(query, user) {
        const { limit = 20, skip = 0, sortBy, sortByDesc, filter } = query;
        let sortCriteria = null;
        let select = null;
        if (sortBy) {
            sortCriteria = {[sortBy]: 1}
        };

        if (sortByDesc) {
            sortCriteria = {[sortByDesc]: -1}
        };
        
        if (filter) {
            select = filter.split('|').join(' ')
        };
        
        const result = await Contact.listContacts({limit, skip, sortCriteria, select}, user);
        return result       
    };

    async getById(id, user) { 
        const contact = await Contact.getContactById(id, user);

        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found');
        }

        return contact
        
    }

    async create(body, user) {
        const contact = await Contact.addContact(body, user);
        return contact
    }
    
    async update(id, body, user) {
        const contact = await Contact.updateContact(id, body, user);
        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found')
        }

        return contact
    } 

    async remove(id, user) {
        const contact = await Contact.removeContact(id, user);
        if (!contact) {
            throw new CustomError(HTTP_STATUS_CODE.NOT_FOUND, 'Not Found')
        }

        return contact
    }

   
}


module.exports = new ContactsService()