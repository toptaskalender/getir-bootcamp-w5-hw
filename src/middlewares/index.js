const { 
  validate,
  checkId
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
  checkId,

  errorHandler,
  
  verifyAuth,
  restrictTo
}