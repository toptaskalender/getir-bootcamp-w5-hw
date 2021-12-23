const Joi         = require('joi')
const {
  USER_ROLES
}                 = require('../config')
const {
  joiErrorHandler
}                 = require('../../utils/functions')

const updateUserValidation = Joi.object({
  firstName: Joi
    .string()
    .error(joiErrorHandler),

  lastName: Joi
    .string()
    .error(joiErrorHandler),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .error(joiErrorHandler)
    
})

module.exports = updateUserValidation
