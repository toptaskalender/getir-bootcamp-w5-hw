const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const updateCategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(joiErrorHandler),

})
  
module.exports = updateCategoryValidation
