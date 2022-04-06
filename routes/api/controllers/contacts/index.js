const express = require('express');
const router = express.Router();

const { contactsSchema, updateContactsSchema, contactsFavoriteSchema } = require('../../../../schemas/contacts-validation-schema.js');
const { validateBody } = require('../../../../middlewares/validation.js')

const deleteContact = require('./deleteContact.js');
const getAllContacts = require ('./getAllContacts.js');
const getContactById = require ('./getContactById');
const postContact = require ('./postContact.js');
const putContact = require('./putContact.js');
const updateStatusContact = require('./updateStatusContact')

router.delete('/:contactId', deleteContact);
router.get('/', getAllContacts);
router.get('/:contactId', getContactById);
router.post('/', validateBody(contactsSchema), postContact);
router.put('/:contactId', validateBody(updateContactsSchema), putContact);
router.patch('/:contactId/favorite', validateBody(contactsFavoriteSchema), updateStatusContact )


module.exports = router;

