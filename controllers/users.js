const User = require('../models/user')

function indexRoute(req, res, next){
  User.find()
    .populate('jobs')
    .then(users => res.json(users))
    .catch(next)
}

function showRoute(req, res, next){
  User.findOne({ _id: req.params.id })
    .populate('jobs')
    .then(user => res.json(user))
    .catch(next)
}

function profile(req, res, next){
  User.findOne({ _id: req.currentUser._id })
    .populate('jobs')
    .then(user => res.json(user))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  profile
}
