module.exports.USER_ROLES                             = ['user', 'admin']
module.exports.USER_PASSWORD_PATTERN                  = /^[a-zA-Z0-9]{8,30}$/
module.exports.USER_EMAIL_OPTIONS                     = { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }

module.exports.MAX_COMMENT_CHARACTER                  = 200

module.exports.PRODUCT_CATEGORIES                     = ['Beverages', 'Food']
module.exports.PRODUCT_SUB_CATEGORIES                 = ['Water', 'Tea', 'Pasta', 'Oil']
module.exports.PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY  = 'TRY'
module.exports.PRODUCT_ENTITY_PRICE_CURRENCIES        = ['TRY', 'USD', 'EUR']
module.exports.PRODUCT_ENTITY_AMOUNT_UNITS            = ['g', 'kg', 'L', 'ml', 'ct']
