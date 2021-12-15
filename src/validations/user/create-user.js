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
      'any.required'  : 'Email is a required field.',
      'string.base'   : 'Email must be a string.',
      'string.email'  : 'Email must be a valid email.'
    }),

  password: Joi
    .string()
    .min(USER_PASSWORD_MIN)
    .required()
    .messages({
      'string.min'    : `Password must be at least ${USER_PASSWORD_MIN} character long.`,
      'string.base'   : 'Password must be a string.',
      'any.required'  : 'Password is a required field.',
    }),

  passwordConfirm: Joi
    .ref('password'),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .default('user')
    .messages({
      'string.base'   : 'Role must be a string.',
    }),
    
})
  .with('password', 'passwordConfirm')

module.exports = createUserValidation
