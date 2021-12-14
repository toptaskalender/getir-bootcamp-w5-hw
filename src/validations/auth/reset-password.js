const Joi       = require('joi')
const {
  PASSWORD_MIN
}               = require('../config')

const resetPasswordValidation = Joi.object({
  password: Joi
    .string()
    .min(PASSWORD_MIN)
    .required()
    .messages({
      'any.required': 'Password is a required field.'
    }),

  passwordConfirm: Joi
    .ref('password')

})
  .with('password', 'passwordConfirm')

module.exports = resetPasswordValidation
