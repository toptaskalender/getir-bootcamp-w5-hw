const BaseService = require('./base')
const { User }    = require('../models')

class userService extends BaseService {}

module.exports = new userService(User)