const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const createSubcategoryValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(joiErrorHandler),

})
  
module.exports = createSubcategoryValidation
