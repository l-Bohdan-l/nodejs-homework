const { ObjectId, ReturnDocument } = require('mongodb')


const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;
const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}


const updateStatusContact = async function (contactId, body) {
  const collection = await getCollection(DB, 'contacts');
  const objId = new ObjectId(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: objId },
    { $set: body },
    { returnDocument: 'after' },
  );
  return result

    
} 

module.exports = updateStatusContact;