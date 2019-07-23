const Job = require('../models/job')

function indexRoute(req, res, next){
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
