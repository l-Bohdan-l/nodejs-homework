const Contact = require ('../../schemas/contactsSchema.js')

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');

const listContacts = async () => {
  return await Contact.find()
}

module.exports = listContacts;
