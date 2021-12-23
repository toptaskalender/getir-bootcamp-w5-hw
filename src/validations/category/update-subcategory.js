const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const updateSubcategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(joiErrorHandler),

})
  
module.exports = updateSubcategoryValidation
