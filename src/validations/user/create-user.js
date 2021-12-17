const Joi           = require('joi')
const {
  USER_PASSWORD_MIN,
  USER_ROLES
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const createUserValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .error(createErrors),

  password: Joi
    .string()
    .min(USER_PASSWORD_MIN)
    .required()
    .error(createErrors),

  passwordConfirm: Joi
    .ref('password'),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .default('user')
    .error(createErrors)
    
})
  .with('password', 'passwordConfirm')
  .error(createErrors)
  
module.exports = createUserValidation
