const Joi           = require('joi')
const {
  USER_PASSWORD_MIN
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const updatePasswordValidation = Joi.object({
  currentPassword: Joi
    .string()
    .required()
    .error(createErrors),

  password: Joi
    .string()
    .min(USER_PASSWORD_MIN)
    .required()
    .error(createErrors),

  passwordConfirm: Joi
    .ref('password')

})
  .with('password', 'passwordConfirm')
  .error(createErrors)

module.exports = updatePasswordValidation
