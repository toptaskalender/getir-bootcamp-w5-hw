class AppError extends Error {
  constructor(statusCode, msg) {
    super()

    this.isOperational  = true
    this.msg            = msg
    this.statusCode     = statusCode
    this.status         = String(statusCode).startsWith('4') ? 'fail' : 'error'
  }
}

module.exports = AppError