const User = require('../models/user')

function indexRoute(req, res, next){
  User.find()
    .populate('jobs')
    .then(users => res.json(users))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
