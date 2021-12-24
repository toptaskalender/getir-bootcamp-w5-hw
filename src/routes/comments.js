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
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment
}                     = require('../controllers/comments')

router.param('id', checkId)

router.route('/')
  .get(
    getComments
  )
  .post(
    verifyAuth,
    validate('body', createCommentValidation),
    createComment
  )

router.route('/:id')
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