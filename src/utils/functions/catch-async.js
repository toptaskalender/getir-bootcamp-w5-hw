function catchAsync(callback) {
  return (req, res, next) => {
    callback(req, res, next)
      .catch(next)
  }
}

module.exports = catchAsync