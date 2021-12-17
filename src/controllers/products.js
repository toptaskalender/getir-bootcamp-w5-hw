const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}                 = require('./base')
const {
  productService
}                 = require('../services')
const {
  catchAsync
}                 = require('../utils/functions')

const getProducts   = getAll(productService)
const getProduct    = getOne(productService)
const createProduct = createOne(productService)
const updateProduct = updateOne(productService)
const deleteProduct = deleteOne(productService)

const uploadImage = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'File upload was successful.'
  })
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage
}