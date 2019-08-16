const Company = require('../models/company')

function indexRoute(req, res, next){
  Company.find()
    .populate('jobs -company')
    .then(companies => res.json(companies))
    .catch(next)
}

function createRoute(req, res, next){
  Company.create(req.body)
    .then(company => res.status(201).json(company))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute
}
