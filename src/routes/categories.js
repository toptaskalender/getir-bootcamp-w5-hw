const router              = require('express').Router()
const {
  checkId,
  verifyAuth,
  validate,
  restrictTo
}                           = require('../middlewares')
const {
  createCategoryValidation,
  updateCategoryValidation,

  createSubcategoryValidation,
  updateSubcategoryValidation
}                           = require('../validations')
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,

  getSubcategories,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
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

router.route('/subcategories')
  .get(
    getSubcategories
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

router.route('/:id/subcategories')
  .post(
    verifyAuth,
    restrictTo('admin'),
    validate('body', createSubcategoryValidation),
    createSubcategory
  )

router.route('/:id/subcategories/:subcategory')
  .patch(
    verifyAuth,
    restrictTo('admin'),
    validate('body', updateSubcategoryValidation),
    updateSubcategory
  )
  .delete(
    verifyAuth,
    restrictTo('admin'),
    deleteSubcategory
  )

module.exports = router