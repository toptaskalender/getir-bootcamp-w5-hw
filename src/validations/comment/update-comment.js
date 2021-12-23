const Joi           = require('joi')
const {
  MAX_COMMENT_CHARACTER
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const updateCommentValidation = Joi.object({
  title: Joi
    .string()
    .error(joiErrorHandler),
  
  body: Joi
    .string()
    .max(MAX_COMMENT_CHARACTER)
    .error(joiErrorHandler),

  rating: Joi
    .number()
    .min(1)
    .max(5)
    .error(joiErrorHandler),
  
})

module.exports = updateCommentValidation
