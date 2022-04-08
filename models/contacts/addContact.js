const { randomUUID } = require('crypto')

const getContactById = require('./getContactById.js');
const DB = require('../../config/db.js');
/// const db = new DB('../db/contacts.json');

const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const addContact = async (body) => {
  const collection = await getCollection(DB, 'contacts');
  const newContact = {
    favorite: false,
    ...body,
  };
  const result = await collection.insertOne(newContact);
  return await getContactById(result.insertedId)
}

module.exports = addContact
