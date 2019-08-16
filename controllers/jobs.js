const Job = require('../models/job')

function indexRoute(req, res, next){
  Job.find()
    .populate('sectors')
    .then(jobs => res.json(jobs))
    .catch(next)
}

function showRoute(req, res, next){
  Job.findOne({ _id: req.params.id })
    .populate('sectors')
    .then(job => res.json(job))
    .catch(next)
}

function createRoute(req, res, next){
  Job.create(req.body)
    .then(job => res.status(201).json(job))
    .catch(next)
}

function deleteRoute(req, res, next){
  Job.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next)
}

function updateRoute(req, res, next){
  Job.findById(req.params.id)
    .then(job => job.set(req.body))
    .then(job => job.save())
    .then(job => res.status(200).json(job))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  delete: deleteRoute,
  update: updateRoute
}
