const User = require('../models/user')

function indexRoute(req, res, next){
  User.find()
    .populate('jobs')
    .then(users => res.json(users))
    .catch(next)
}

function showRoute(req, res, next){
  User.findById(req.params.id)
    .populate('jobs')
    .then(user => res.json(user))
    .catch(next)
}

function profile(req, res, next){
  User.findById(req.currentUser)
    .populate('jobs')
    .then(user => res.json(user))
    .catch(next)
}

function apply(req, res, next){
  User.findById(req.currentUser)
    .then(user => {
      const jobs = [ ...user.jobs, req.params.id ]
      return user.set({ jobs })
    })
    .then(user => user.save())
    .then(user =>  res.json(user))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  profile,
  apply
}
