const Joi = require('joi')

const forgotPasswordValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'any.required': 'Email is a required field',
      'string.email': 'Email must be a valid email'
    })
})

module.exports = forgotPasswordValidation
