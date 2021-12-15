const Joi       = require('joi')
const {
  USER_PASSWORD_MIN,
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
    .min(USER_PASSWORD_MIN)
    .required()
    .messages({
      'any.required': 'Password is a required field.',
      'any.only'    : 'Password confirm must be equal to password.',
      'string.min'  : `Password should be at least ${USER_PASSWORD_MIN} character long.`
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
