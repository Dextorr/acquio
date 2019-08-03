const Job = require('../models/job')

function indexRoute(req, res, next){
  Job.find()
    .populate('sectors company')
    .then(jobs => res.json(jobs))
    .catch(next)
}

function showRoute(req, res, next){
  Job.findOne({ _id: req.params.id })
    .populate('sectors company')
    .then(job => res.json(job))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
