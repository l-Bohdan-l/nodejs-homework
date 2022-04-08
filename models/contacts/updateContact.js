const { ObjectId, ReturnDocument } = require('mongodb')


const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;
const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const updateContact = async (contactId, body) => { 
  const collection = await getCollection(DB, 'contacts');
  const objId = new ObjectId(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: objId },
    { $set: body },
    { returnDocument: 'after' },
  );
  return result
  // const index = contacts.findIndex(contact => contact.id === contactId);

 
  // if (index !== -1) {
  //   contacts[index] = {...contacts[index], ...body}
  //   await db.write(contacts);
  //   return contacts[index]
  // }

  // return null
}


module.exports = updateContact
