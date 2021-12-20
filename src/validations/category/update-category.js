const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const updateCategoryValidation = Joi.object({
  name: Joi
    .string()
    .error(createErrors),

})
  
module.exports = updateCategoryValidation
