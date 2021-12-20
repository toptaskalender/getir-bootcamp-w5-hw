function createLabelFrom(param, splitBy = '-') {
  return param
    .split(splitBy)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ')
}

module.exports = createLabelFrom