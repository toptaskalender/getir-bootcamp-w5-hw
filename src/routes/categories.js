const router              = require('express').Router()
const {
  checkId,
  verifyAuth,
  validate,
  restrictTo
}                           = require('../middlewares')
const {
  createCategoryValidation,
  updateCategoryValidation
}                           = require('../validations')
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
}                           = require('../controllers/categories')

router.param('id', checkId)

router.route('/')
  .get(
    getCategories      
  )
  .post(
    verifyAuth,
    restrictTo('admin'),
    validate('body', createCategoryValidation),
    createCategory
  )

router.route('/:id')
  .get(
    getCategory
  )
  .patch(
    verifyAuth,
    restrictTo('admin'),
    validate('body', updateCategoryValidation),
    updateCategory
  )
  .delete(
    verifyAuth,
    restrictTo('admin'),
    deleteCategory
  )

module.exports = router