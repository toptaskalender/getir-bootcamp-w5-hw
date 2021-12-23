const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const createCategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(joiErrorHandler),

  subcategories: Joi
    .array()
    .items(
      Joi
        .string()
    )
  
})
  
module.exports = createCategoryValidation
