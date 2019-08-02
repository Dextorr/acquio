const Company = require('../models/company')

function indexRoute(req, res, next){
  Company.find()
    .populate('jobs -company')
    .then(companies => res.json(companies))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
