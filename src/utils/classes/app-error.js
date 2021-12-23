class AppError extends Error {
  constructor(statusCode, message) {
    super(message)

    this.isOperational  = true
    this.statusCode     = statusCode
    this.status         = String(statusCode).startsWith('4') ? 'fail' : 'error'
  }
}

module.exports = AppError