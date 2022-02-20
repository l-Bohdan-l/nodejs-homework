const express = require('express')

const router = express.Router()

const contactsModel = require('../../models/contacts.js')

router.get('/', async (req, res, next) => {
  const contactsList = await contactsModel.listContacts(); 
  res.json({ 
    status: 'succuess',
    code: 200,
    payload: {contactsList},
  })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
