const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');
const validator = require('validator');
const { NAME_LIMIT } = require('../libs/constants.js');

const contactSchema = new Schema({
  name:  {type: String, required: [true, 'Set name for contact'], min: NAME_LIMIT.min, max: NAME_LIMIT.max}, 
  email: {type: String, required: true, validate: [ validator.isEmail, 'invalid email' ]},
  phone: { type: String, required: true,  },
  favorite: { type: Boolean, required: false, default: false, }, 
  owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
}, {versionKey: false, timestamps: true});

contactSchema.plugin(mongoosePaginate);
const Contact = model('contact', contactSchema);

module.exports = Contact;