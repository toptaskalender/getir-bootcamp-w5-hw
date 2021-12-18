const Joi         = require('joi')
const {
  USER_ROLES
}                 = require('../config')
const {
  createErrors
}                 = require('../../utils/functions')

const updateUserValidation = Joi.object({
  firstName: Joi
    .string()
    .error(createErrors),

  lastName: Joi
    .string()
    .error(createErrors),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .error(createErrors)
    
})

module.exports = updateUserValidation
