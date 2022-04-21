const Contact = require('../../schemas/contactsSchema.js');

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');


const getContactById = async (contactId, user) => {
  return await Contact.findOne({_id: contactId, owner: user.id})
}

module.exports = getContactById
