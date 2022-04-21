const Contact = require('../../schemas/contactsSchema.js');


const DB = require('../../config/db.js');
// const db = new DB('../db/contacts.json');;

const updateContact = async (contactId, body, user) => { 
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: user.id },
    { ...body },
    { new: true },);
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
