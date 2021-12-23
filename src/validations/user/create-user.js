const Joi           = require('joi')
const {
  USER_PASSWORD_PATTERN,
  USER_ROLES,
  USER_EMAIL_OPTIONS
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const createUserValidation = Joi.object({
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
    .ref('password'),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .default('user')
    .error(joiErrorHandler)
    
})
  .with('password', 'passwordConfirm')
  .error(joiErrorHandler)
  
module.exports = createUserValidation
