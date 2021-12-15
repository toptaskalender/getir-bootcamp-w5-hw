const router        = require('express').Router()
const {
  verifyAuth,
  restrictTo,
  validate
}                   = require('../middlewares')
const {
  createProductValidation
}                   = require('../validations')
const {
  getProducts,
  createProduct
}                   = require('../controllers/products')

router.route('/')
  .get(
    getProducts  
  )
  .post(
    verifyAuth,
    restrictTo('admin'),
    validate('body', createProductValidation),
    createProduct
  )

module.exports = router