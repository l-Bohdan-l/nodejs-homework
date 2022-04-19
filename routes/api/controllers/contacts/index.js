const express = require('express');
const router = express.Router();

const { contactsSchema, updateContactsSchema, contactsFavoriteSchema } = require('../../../../schemas/contacts-validation-schema.js');
const { validateBody } = require('../../../../middlewares/validation.js')

const guard = require('../../../../middlewares/guard.js');
const deleteContact = require('./deleteContact.js');
const getAllContacts = require ('./getAllContacts.js');
const getContactById = require ('./getContactById');
const postContact = require ('./postContact.js');
const putContact = require('./putContact.js');
const updateStatusContact = require('./updateStatusContact')

router.get('/', guard, getAllContacts);
router.get('/:contactId', guard, getContactById);
router.delete('/:contactId', guard, deleteContact);
router.post('/', guard, validateBody(contactsSchema), postContact);
router.put('/:contactId', guard, validateBody(updateContactsSchema), putContact);
router.patch('/:contactId/favorite', guard, validateBody(contactsFavoriteSchema), updateStatusContact )


module.exports = router;

