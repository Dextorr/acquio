const Job = require('../models/job')

function indexRoute(req, res, next){
  Job.find()
    .populate('sectors company')
    .then(jobs => res.json(jobs))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
