const Contact = require('../../schemas/contactsSchema.js');

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;


const removeContact = async (contactId) => {
  const result = await Contact.findOneAndRemove({ _id: contactId });
  return result
}

module.exports = removeContact
