const router        = require('express').Router()
const {
  verifyAuth,
  restrictTo,
  validate
}                   = require('../middlewares')
const {
  createProductValidation,
  updateProductValidation
}                   = require('../validations')
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
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

router.route('/:id')
  .get(
    getProduct
  )
  .patch(
    verifyAuth,
    restrictTo('admin'),
    validate('body', updateProductValidation),
    updateProduct
  )
  .delete(
    verifyAuth,
    restrictTo('admin'),
    deleteProduct
  )

module.exports = router