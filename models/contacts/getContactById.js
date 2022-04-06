const { ObjectId } = require('mongodb')

const DB = require('../../db/db.js');
// const db = new DB('../db/contacts.json');
const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const getContactById = async (contactId) => {
  const objId = new ObjectId(contactId)
  const collection = await getCollection(DB, 'contacts');
  const result = await collection.find({_id: objId}).toArray()
  return result
}

module.exports = getContactById
