const Joi       = require('joi')
const {
  PASSWORD_MIN,
  USER_ROLES
}               = require('../config')

const createUserValidation = Joi.object({
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
    .ref('password'),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .default('user')
    
})
  .with('password', 'passwordConfirm')

module.exports = createUserValidation
