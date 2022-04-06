const { randomUUID } = require('crypto')

const DB = require('../../db/db.js');
/// const db = new DB('../db/contacts.json');

const getCollection = async (db, collectionName) => {
  const client = await db 
  const collection = client.db().collection(collectionName)
  return collection
}

const addContact = async (body) => {
  // const contacts = await db.read();
  // const newContact = {
  //   id: randomUUID(),
  //   favorite: false,
  //   ...body,
  // };
  // contacts.push(newContact);
  // await db.write(contacts);

  // return newContact
}

module.exports = addContact
