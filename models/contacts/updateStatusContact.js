const DB = require('../../db/db.js');
const db = new DB('../db/contacts.json');

const updateStatusContact = async function (contactId, body) {
     const contacts = await db.read();
    const index = contacts.findIndex(contact => contact.id === contactId);

    
}