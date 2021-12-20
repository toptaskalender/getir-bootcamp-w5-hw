const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}                 = require('./base')
const {
  catchAsync
}                 = require('../utils/functions')
const {
  AppError
}                 = require('../utils/classes')
const {
  categoryService
}                 = require('../services')

const getCategories   = getAll(categoryService)
const getCategory     = getOne(categoryService)
const createCategory  = createOne(categoryService)
const updateCategory  = updateOne(categoryService)
const deleteCategory  = deleteOne(categoryService)

const createSubcategory = catchAsync(async (req,res, next) => {
  const { id }    = req.params
  const {
    name: subcategory
  }               = req.body

  const beforeCreateSubcategory = await categoryService.findById(id)
  const category                = await categoryService.findByIdAndUpdate(id, { $addToSet: { subcategories: subcategory } })
  const wasSubcategoryCreated   = beforeCreateSubcategory.subcategories.length !== category.subcategories.length

  if (!category) return next(new AppError(400, 'Cannot find a category with given id.'))
  if (!wasSubcategoryCreated) return next(new AppError(400, 'Subcategory must be unique across the category.'))

  res.status(201).json({
    status: 'success',
    data: {
      data: category
    }
  })
})

const updateSubcategory = catchAsync(async (req, res, next) => {
  const { id }      = req.params
  const [
    oldSubcategory,
    newSubcategory
  ]                 = req.body.name

  const category  = await categoryService.findOneAndUpdate(
    { id, 'subcategories': oldSubcategory },
    { $set: { 'subcategories.$': newSubcategory } }
  )

  if (!category) return next(new AppError(400, 'Cannot find a category with given id or that has the same subcategory name.'))

  res.status(200).json({
    status: 'success',
    data: {
      data: category
    }
  })
})

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,

  createSubcategory,
  updateSubcategory
}