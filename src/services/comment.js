const BaseService = require('./base')
const { Comment } = require('../models')

class CommentService extends BaseService {}

module.exports = new CommentService(Comment)