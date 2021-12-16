const router  = require('express').Router()
const {
  restrictTo,
  validate
}             = require('../middlewares')
const {
  createUserValidation,
  updateUserValidation
}             = require('../validations')
const {
  getMe,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}             = require('../controllers/users')

router.route('/me')
  .get(getMe)

router.route('/')
  .get(
    restrictTo('admin'),
    getUsers
  )
  .post(
    restrictTo('admin'),
    validate('body', createUserValidation),
    createUser
  )

router.route('/:id')
  .get(
    restrictTo('admin'),
    getUser
  )
  .patch(
    restrictTo('admin'),
    validate('body', updateUserValidation),
    updateUser
  )
  .delete(
    restrictTo('admin'),
    deleteUser
  )

module.exports = router