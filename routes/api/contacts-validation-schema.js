const Joi = require('joi');

const schema = Joi.object({
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
        .messages({'any.required': 'missing required phone field'}),
    
})

module.exports = { schema };
    