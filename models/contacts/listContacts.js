const Contact = require ('../../schemas/contactsSchema.js')

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');

const listContacts = async (query, user) => {
  return await Contact.find({owner: user.id})
}

module.exports = listContacts;
