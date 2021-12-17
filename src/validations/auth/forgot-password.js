const Joi               = require('joi')
const { createErrors }  = require('../../utils/functions')

const forgotPasswordValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .error(createErrors)
    
})

module.exports = forgotPasswordValidation