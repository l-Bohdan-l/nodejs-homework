const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { NAME_LIMIT } = require('../libs/constants.js');
const {randomUUID} = require('crypto');
const { string } = require('joi');


const userSchema = new Schema({
  name:  {type: String, required: [true, 'Set name for contact'], min: NAME_LIMIT.min, max: NAME_LIMIT.max, default: 'Guest'}, 
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [ validator.isEmail, 'invalid email' ],
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },  
  avatar: {
    type: String,
    default: function () {
      return gravatar.url(this.email, { s: 250 }, true)
    }
  },
  isVerify: { type: Boolean, default: false },
  verifyEmailToken: {type: String, default: randomUUID()},
}, {versionKey: false, timestamps: true});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(6);
        this.password = await bcrypt.hash(this.password, salt)
    };
    next()
});

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};

const User = model('user', userSchema);

module.exports = User;