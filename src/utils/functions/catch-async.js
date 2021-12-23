function catchAsync(callback) {
  return (req, res, next) => {
    callback(req, res)
      .catch(next)
  }
}

module.exports = catchAsync