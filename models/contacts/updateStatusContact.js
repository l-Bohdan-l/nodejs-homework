const Contact = require('../../schemas/contactsSchema.js');

const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;



const updateStatusContact = async function (contactId, body, user) {
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: user.id },
    { ...body },
    { new: true },);
  return result

    
} 

module.exports = updateStatusContact;