const Joi       = require('joi')
const {
  USER_PASSWORD_MIN
}               = require('../config')

const signUpValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email'  : 'Email must be a valid email.',
      'string.base'   : 'Email must be a string.',
      'any.required'  : 'Email is a required field.'
    }),

  password: Joi
    .string()
    .min(USER_PASSWORD_MIN)
    .required()
    .messages({
      'string.min'    : `Password must be at least ${USER_PASSWORD_MIN} character long.`,
      'string.base'   : 'Password must be a string.',
      'any.required'  : 'Password is a required field.'
    }),

  passwordConfirm: Joi
    .ref('password')
    
})
  .with('password', 'passwordConfirm')

module.exports = signUpValidation
