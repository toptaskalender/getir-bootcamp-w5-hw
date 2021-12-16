const Joi         = require('joi')
const {
  USER_ROLES
}                 = require('../config')
const {
  createMessages
}                 = require('../../utils/functions')

const updateUserValidation = Joi.object({
  role: Joi
    .string()
    .valid(...USER_ROLES)
    .messages(
      createMessages(
        'Role',
        {
          string: true
        }
      )
    ),
    
})

module.exports = updateUserValidation
