const multer        = require('multer')
const router        = require('express').Router()
const {
  storage,
  fileFilter
}                   = require('../config/multer')
const upload        = multer({ storage, fileFilter })
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
  deleteProduct,
  uploadImage
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

router.route('/:id/image')
  .patch(
    verifyAuth,
    restrictTo('admin'),
    upload.single('image'),
    uploadImage
  )

module.exports = router