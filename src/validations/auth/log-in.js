const Joi = require('joi')

const logInValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email'  : 'Email must be a valid email',
      'string.base'   : 'Email must be a string.',
      'any.required'  : 'Email is a required field'
    }),

  password: Joi
    .string()
    .required()
    .messages({
      'string.base'   : 'Password must be a string.',
      'any.required'  : 'Password is a required field'
    }),

})

module.exports = logInValidation
