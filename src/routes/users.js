const router  = require('express').Router()
const {
  restrictTo,
  validate
}             = require('../middlewares')
const {
  createUserValidation,
  updateUserValidation,
  
  createAddressValidation,
  updateAddressValidation
}             = require('../validations')
const {
  getMe,
  createAddress,
  updateAddress,
  deleteAddress,

  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}             = require('../controllers/users')

router.route('/me')
  .get(getMe)

router.route('/me/addresses')
  .post(
    validate('body', createAddressValidation),
    createAddress
  )

router.route('/me/addresses/:id')
  .patch(
    validate('body', updateAddressValidation),
    updateAddress
  )
  .delete(
    deleteAddress
  )

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