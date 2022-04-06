const DB = require('../../db/db.js');
const db = new DB('../db/contacts.json');

const updateStatusContact = async function (contactId, body) {
     const contacts = await db.read();
  const index = contacts.findIndex(contact => contact.id === contactId);

  if (index !== -1) {
    contacts[index] = {...contacts[index], ...body}
    await db.write(contacts);
    return contacts[index]
  }

  return null

    
} 

module.exports = updateStatusContact;