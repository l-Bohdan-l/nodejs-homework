const { ObjectId, ReturnDocument } = require('mongodb')

const DB = require('../../db/db.js');
// const db = new DB('../db/contacts.json');;
const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const removeContact = async (contactId) => {
  const collection = await getCollection(DB, 'contacts');
  const objId = new ObjectId(contactId);
  const { value: result } = await collection.findOneAndDelete({ _id: objId },);
  return result
}

module.exports = removeContact
