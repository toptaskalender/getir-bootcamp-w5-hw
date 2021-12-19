const router          = require('express').Router({ mergeParams: true })
const {
  verifyAuth,
  validate
}                     = require('../middlewares')
const {
  createCommentValidation
}                     = require('../validations')
const {
  createComment
}                     = require('../controllers/comments')

router.route('/comments')
  .post(
    verifyAuth,
    validate('body', createCommentValidation),
    createComment
  )

module.exports = router