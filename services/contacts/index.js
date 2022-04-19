const { HTTP_STATUS_CODE } = require("../../libs/constants");
const { CustomError } = require("../../middlewares/errorHandler");
const Contact = require('../../models/contacts');
const SECRET_KEY = process.env.JWT_SECRET_KEY





class ContactsService {
    async getAll(query) {
        const contactsList = await Contact.listContacts();
        return contactsList
        
    };

    async getById({ email, password }) { 
        
    }

    async create(id) {
       
    }
    
    async update(email, password) {
        
    } 

    async remove() {
        
    }

   
}


module.exports = new ContactsService()