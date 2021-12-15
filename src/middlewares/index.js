const { 
  validate
}           = require('./validation')
const {
  errorHandler
}           = require('./error')
const {
  verifyAuth,
  restrictTo
}           = require('./auth')

module.exports = {
  validate,

  errorHandler,
  
  verifyAuth,
  restrictTo
}