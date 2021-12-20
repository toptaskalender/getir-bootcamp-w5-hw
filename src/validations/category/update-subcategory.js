const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const updateSubcategoryValidation = Joi.object({
  name: Joi
    .array()
    .items(
      Joi
        .string()
        .required()
    )
    .length(2)
    .required()
    .error(createErrors),

})
  
module.exports = updateSubcategoryValidation
