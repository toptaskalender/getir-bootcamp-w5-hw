const router  = require('express').Router()
const {
  restrictTo,
  validate
}             = require('../middlewares')
const {
  createUserValidation
}             = require('../validations')
const {
  getMe,
  createUser
}             = require('../controllers/users')

router.route('/me')
  .get(getMe)

router.route('/')
  .post(
    restrictTo('admin'),
    validate('body', createUserValidation),
    createUser
  )

module.exports = router