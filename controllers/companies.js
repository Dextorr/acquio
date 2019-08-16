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

function showRoute(req, res, next){
  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(next)
}

function deleteRoute(req, res, next){
  Company.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next)
}

function updateRoute(req, res, next) {
  Company.findById(req.params.id)
    .then(company => company.set(req.body))
    .then(company => company.save())
    .then(company => res.status(200).json(company))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute
}
