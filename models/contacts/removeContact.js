const Contact = require('../../schemas/contactsSchema.js');

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;


const removeContact = async (contactId, user) => {
  const result = await Contact.findOneAndRemove({ _id: contactId, owner: user.id });
  return result
}

module.exports = removeContact
