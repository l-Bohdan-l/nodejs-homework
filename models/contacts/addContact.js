const Contact = require('../../schemas/contactsSchema.js');

const getContactById = require('./getContactById.js');
const DB = require('../../config/db.js');
/// const db = new DB('../db/contacts.json');


const addContact = async (body, user) => {
  const result = await Contact.create({...body, owner: user.id});
  return result
}

module.exports = addContact
