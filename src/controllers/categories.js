const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}                 = require('./base')
const {
  categoryService
}                 = require('../services')

const getCategories   = getAll(categoryService)
const getCategory     = getOne(categoryService)
const createCategory  = createOne(categoryService)
const updateCategory  = updateOne(categoryService)
const deleteCategory  = deleteOne(categoryService)

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
}