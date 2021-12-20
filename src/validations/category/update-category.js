const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const updateCategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(createErrors),

})
  
module.exports = updateCategoryValidation
