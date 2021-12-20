const Joi           = require('joi')
const {
  MAX_COMMENT_CHARACTER
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const updateCommentValidation = Joi.object({
  title: Joi
    .string()
    .error(createErrors),
  
  body: Joi
    .string()
    .max(MAX_COMMENT_CHARACTER)
    .error(createErrors),

  rating: Joi
    .number()
    .min(1)
    .max(5)
    .error(createErrors),
  
})

module.exports = updateCommentValidation
