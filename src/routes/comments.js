const router          = require('express').Router({ mergeParams: true })
const {
  verifyAuth,
  validate,
  checkId
}                     = require('../middlewares')
const {
  createCommentValidation,
  updateCommentValidation
}                     = require('../validations')
const {
  getComment,
  createComment,
  updateComment,
  deleteComment
}                     = require('../controllers/comments')

router.param('id', checkId)

router.route('/comments')
  .post(
    verifyAuth,
    validate('body', createCommentValidation),
    createComment
  )

router.route('/comments/:id')
  .get(
    getComment
  )
  .patch(
    verifyAuth,
    validate('body', updateCommentValidation),
    updateComment
  )
  .delete(
    verifyAuth,
    deleteComment
  )

module.exports = router