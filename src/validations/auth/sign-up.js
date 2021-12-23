const Joi                 = require('joi')
const { joiErrorHandler } = require('../../utils/functions')
const {
  USER_PASSWORD_PATTERN,
  USER_EMAIL_OPTIONS
}                         = require('../config')

const signUpValidation = Joi.object({
  firstName: Joi
    .string()
    .required()
    .error(joiErrorHandler),

  lastName: Joi
    .string()
    .required()
    .error(joiErrorHandler),
  
  email: Joi
    .string()
    .email(USER_EMAIL_OPTIONS)
    .lowercase()
    .required()
    .error(joiErrorHandler),

  password: Joi
    .string()
    .pattern(USER_PASSWORD_PATTERN)
    .required()
    .error(joiErrorHandler),

  passwordConfirm: Joi
    .ref('password')
    
})
  .with('password', 'passwordConfirm')
  .error(joiErrorHandler)

module.exports = signUpValidation
