const Joi           = require('joi')
const {
  USER_PASSWORD_PATTERN
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const updatePasswordValidation = Joi.object({
  currentPassword: Joi
    .string()
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

module.exports = updatePasswordValidation
