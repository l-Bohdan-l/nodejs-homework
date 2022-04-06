const Joi = require('joi');

const contactsSchema = Joi.object({
    name: Joi.string()        
        .min(2)
        .max(30)
        .required()
        .messages({'any.required': 'missing required name field'}),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: false } })
        .required()
        .messages({'any.required': 'missing required email field'}),

    phone: Joi.string()
        .min(6)
        .max(30)            
        .required()
        .messages({ 'any.required': 'missing required phone field' }),
    
    favorite: Joi.boolean() 
        .optional(),
    
});

const updateContactsSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: false } }),

    phone: Joi.string()
        .min(6)
        .max(30),
    
    favorite: Joi.boolean(),         
    
}).required();

const contactsFavoriteSchema = Joi.object({    
    favorite: Joi.boolean().required(),        
    
});


module.exports = { contactsSchema, updateContactsSchema, contactsFavoriteSchema };
    