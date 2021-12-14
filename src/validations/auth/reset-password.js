const Joi = require('joi')

const resetPasswordValidation = Joi.object({
  password: Joi
    .string()
    .required()
    .messages({
      'any.required': 'Password is a required field.'
    }),

  passwordConfirm: Joi
    .ref('password')

})
  .with('password', 'passwordConfirm')

module.exports = resetPasswordValidation
