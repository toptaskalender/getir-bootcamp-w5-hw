const Joi               = require('joi')
const { createErrors }  = require('../../utils/functions')

const logInValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .error(createErrors),

  password: Joi
    .string()
    .required()
    .error(createErrors),

})

module.exports = logInValidation
