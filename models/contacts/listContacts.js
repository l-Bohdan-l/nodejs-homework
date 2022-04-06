const { ObjectId } = require('mongodb')

const DB = require('../../db/db.js');
// const db = new DB('../db/contacts.json');

const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const listContacts = async () => { 
  const collection = await getCollection(DB, 'contacts');
  return await collection.find().toArray()
}

module.exports = listContacts;
