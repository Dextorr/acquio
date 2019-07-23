const Company = require('../models/company')

function indexRoute(req, res, next){
  Company.find()
    .then(companies => res.json(companies))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
