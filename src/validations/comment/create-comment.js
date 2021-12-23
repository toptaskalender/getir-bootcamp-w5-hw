const Joi           = require('joi')
const {
  MAX_COMMENT_CHARACTER
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const createCommentValidation = Joi.object({
  title: Joi
    .string()
    .required()
    .error(joiErrorHandler),
  
  body: Joi
    .string()
    .max(MAX_COMMENT_CHARACTER)
    .required()
    .error(joiErrorHandler),

  rating: Joi
    .number()
    .min(1)
    .max(5)
    .required()
    .error(joiErrorHandler),
  
})

module.exports = createCommentValidation
