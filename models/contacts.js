// const fs = require('fs/promises')
const { randomUUID } = require('crypto')

const DB = require('./db.js');
const db = new DB('contacts.json');



const listContacts = async () => {
  return await db.read()
}

const getContactById = async (contactId) => {}

const removeContact = async (contactId) => {}

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
