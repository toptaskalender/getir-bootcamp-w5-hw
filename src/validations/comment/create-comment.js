const Joi           = require('joi')
const {
  MAX_COMMENT_CHARACTER
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const createCommentValidation = Joi.object({
  title: Joi
    .string()
    .required()
    .error(createErrors),
  
  body: Joi
    .string()
    .max(MAX_COMMENT_CHARACTER)
    .required()
    .error(createErrors),

  rating: Joi
    .number()
    .min(1)
    .max(5)
    .required()
    .error(createErrors),
  
})

module.exports = createCommentValidation
