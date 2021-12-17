function createErrors(errors) {
  console.log('errors => ', errors)

  errors.forEach(err => {
    const field   = err.local
    
    switch (err.code) {
      case 'any.required':
        err.message = `${field.label} is a required field.`
        break
      case 'any.only':
        err.message = `${field.label} must be either ${field.valids.join(', ')}.`
        break
      case 'string.empty':
        err.message = `${field.label} cannot be empty.`
        break
      case 'string.email':
        err.message = `${field.label} must be a valid email.`
        break
      case 'string.min':
        err.message = `${field.label} must be at least ${field.limit} character long.`
        break
      case 'object.with':
        err.message = `${field.main} must be provided with ${field.peer}.`
        break
    }
  })

  return errors
}

module.exports = createErrors