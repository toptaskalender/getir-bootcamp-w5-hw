const Joi       = require('joi')
const {
  PASSWORD_MIN
}               = require('../config')

const signUpValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'any.required': 'Email is a required field.',
      'string.email': 'Email must be a valid email.'
    }),

  password: Joi
    .string()
    .min(PASSWORD_MIN)
    .required()
    .messages({
      'any.required': 'Password is a required field.',
      'string.min': 'Password should be at least 8 character long.'
    }),

  passwordConfirm: Joi
    .ref('password')
    
})
  .with('password', 'passwordConfirm')

module.exports = signUpValidation
