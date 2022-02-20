const express = require('express');
const router = express.Router();
const contactsModel = require('../../models/contacts.js');
const { contactsSchema, updateContactsSchema } = require('./contacts-validation-schema.js');
const {validateBody} = require('../../middlewares/validation.js')


router.get('/', async (req, res, next) => {
  const contactsList = await contactsModel.listContacts(); 
  res.json({ 
    status: 'succuess',
    code: 200,
    payload: {contactsList},
  })
})

router.get('/:contactId', async (req, res, next) => {
  const contact = await contactsModel.getContactById(req.params.contactId); 
  if (contact) {
    return res.json({ 
      status: 'succuess',
      code: 200,
      payload: {contact},
    })    
  } else {
      return res.status(404).json({ 
        status: 'error',
        code: 404,
        message: "Not found",
      })    
  }
})

router.post('/', validateBody(contactsSchema), async (req, res, next) => {
  const contact = await contactsModel.addContact(req.body); 
  res.status(201).json({ 
    status: 'succuess',
    code: 201,
    payload: {contact},
  })
})

router.delete('/:contactId', async (req, res, next) => {
  const contact = await contactsModel.removeContact(req.params.contactId); 
  if (contact) {
    return res.json({ 
      status: 'succuess',
      code: 200,
      message: "contact deleted",
      payload: {contact},
    })    
  } else {
      return res.status(404).json({ 
        status: 'error',
        code: 404,
        message: "Not found",
      })    
  }
})

router.put('/:contactId', validateBody(updateContactsSchema), async (req, res, next) => {  
  const contact = await contactsModel.updateContact(req.params.contactId, req.body); 
  
  if (Object.keys(req.body).length === 0) { 
    return res.status(404).json({ 
        status: 'error',
        code: 400,
        message: "missing fields",
    })    
  };    

  if (contact) {
    return res.json({ 
      status: 'succuess',
      code: 200,      
      payload: {contact},
    })    
  }
  else {
      return res.status(404).json({ 
        status: 'error',
        code: 404,
        message: "Not found",
      })    
  }
})

module.exports = router
