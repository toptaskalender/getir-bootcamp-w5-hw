const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const createSubcategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(createErrors),

})
  
module.exports = createSubcategoryValidation
