const Contact = require('../../schemas/contactsSchema.js');

const getContactById = require('./getContactById.js');
const DB = require('../../config/db.js');
/// const db = new DB('../db/contacts.json');


const addContact = async (body) => {
  const result = await Contact.create(body);
  return result
}

module.exports = addContact
