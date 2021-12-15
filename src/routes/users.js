const router  = require('express').Router()
const {
  getMe
}             = require('../controllers/users')

router.route('/me')
  .get(getMe)

module.exports = router