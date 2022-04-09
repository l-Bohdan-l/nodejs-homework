const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const validator = require('validator');
const { NAME_LIMIT } = require('../libs/constants.js');

const contactSchema = new Schema({
  name:  {type: String, required: [true, 'Set name for contact'], min: NAME_LIMIT.min, max: NAME_LIMIT.max}, 
  email: {type: String, required: true, validate: [ validator.isEmail, 'invalid email' ]},
  phone: { type: String, required: true,  },
  favorite: { type: Boolean, required: false, default: false, },  
}, {versionKey: false, timestamps: true});

const Contact = model('contact', contactSchema);

module.exports = Contact;