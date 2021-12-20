const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const updateSubcategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(createErrors),

})
  
module.exports = updateSubcategoryValidation
