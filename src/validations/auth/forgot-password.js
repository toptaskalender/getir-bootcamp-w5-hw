const Joi = require('joi')

const forgotPasswordValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.base'   : 'Email must be a string.',
      'string.email'  : 'Email must be a valid email',
      'any.required'  : 'Email is a required field'
    })
    
})

module.exports = forgotPasswordValidation
