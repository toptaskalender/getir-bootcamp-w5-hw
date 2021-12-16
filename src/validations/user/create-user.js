const Joi               = require('joi')
const {
  USER_PASSWORD_MIN,
  USER_ROLES
}                       = require('../config')
const {
  createMessages
}                       = require('../../utils/functions')

const createUserValidation = Joi.object({
  email: Joi
    .string()
    .email()
    .lowercase()
    .required()
    .messages(
      createMessages(
        'Email',
        {
          string  : true,
          email   : true,
          required: true
        }
      )
    ),

  password: Joi
    .string()
    .min(USER_PASSWORD_MIN)
    .required()
    .messages(
      createMessages(
        'Password',
        {
          string    : true,
          stringMin : true,
          required  : true,
        }
      )
    ),

  passwordConfirm: Joi
    .ref('password'),

  role: Joi
    .string()
    .valid(...USER_ROLES)
    .default('user')
    .messages(
      createMessages(
        'Role',
        {
          string: true
        }
      )
    ),
    
})
  .with('password', 'passwordConfirm')

module.exports = createUserValidation
