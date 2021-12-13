const {
  AppError
}             = require('../../utils/classes')

function validate(source, schema) {
  return (req, _, next) => {
    let data;
    
    const isTypeOfSourceEqualToString = typeof source === 'string';
    const isTypeofSourceEqualToArray  = Array.isArray(source) === true;

    if (isTypeOfSourceEqualToString) {
      data = req[source];
    } else if (isTypeofSourceEqualToArray) {
      source.forEach(s => {
        data = { 
          ...data,
          ...req[s]
        };
      });
    }

    const { error, value }  = schema.validate(data);

    console.log('err => ', error)

    if (error) {
      const msg = error.details[0].message
      
      return next(new AppError(400, msg))
    }

    next();
  }
}

module.exports = validate