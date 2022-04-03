const { randomUUID } = require('crypto')

const DB = require('../../db/db.js');
const db = new DB('../db/contacts.json');

const getContactById = async (contactId) => {
  const contacts = await db.read();
  const contact = contacts.find(filteredContact => filteredContact.id === contactId);
  return contact
}

module.exports = getContactById
