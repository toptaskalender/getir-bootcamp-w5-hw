const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const createCategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(createErrors),

  subcategories: Joi
    .array()
    .items(
      Joi
        .string()
    )
  
})
  
module.exports = createCategoryValidation
