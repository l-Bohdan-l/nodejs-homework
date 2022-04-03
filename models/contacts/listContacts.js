const { randomUUID } = require('crypto')

const DB = require('../../db/db.js');
const db = new DB('../db/contacts.json');

const listContacts = async () => {  
  return await db.read()
}

module.exports = listContacts;
