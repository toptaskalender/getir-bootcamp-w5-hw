const Joi = require('joi')

const logInValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'any.required': 'Email is a required field',
      'string.email': 'Email must be a valid email'
    }),

  password: Joi
    .string()
    .required()
    .messages({
      'any.required': 'Password is a required field'
    }),

})

module.exports = logInValidation
