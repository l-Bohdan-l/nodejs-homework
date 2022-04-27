const express = require('express');
const router = express.Router();

const { contactsSchema, updateContactsSchema, contactsFavoriteSchema } = require('../../../../schemas/contacts-validation-schema.js');
const { validateBody } = require('../../../../middlewares/validation.js');
const { wrapper: wrapperError } = require('../../../../middlewares/errorHandler');

const guard = require('../../../../middlewares/guard.js');
const deleteContact = require('./deleteContact.js');
const getAllContacts = require ('./getAllContacts.js');
const getContactById = require ('./getContactById');
const postContact = require ('./postContact.js');
const putContact = require('./putContact.js');
const updateStatusContact = require('./updateStatusContact')

router.get('/', guard, wrapperError(getAllContacts));
router.get('/:contactId', guard, wrapperError(getContactById));
router.delete('/:contactId', guard, wrapperError(deleteContact));
router.post('/', guard, validateBody(contactsSchema), wrapperError(postContact));
router.put('/:contactId', guard, validateBody(updateContactsSchema), wrapperError(putContact));
router.patch('/:contactId/favorite', guard, validateBody(contactsFavoriteSchema), wrapperError(updateStatusContact) )


module.exports = router;

