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

const getProducts   = getAll(productService)
const getProduct    = getOne(productService)
const createProduct = createOne(productService)
const updateProduct = updateOne(productService)
const deleteProduct = deleteOne(productService)

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}