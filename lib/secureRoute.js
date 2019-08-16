const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

const { secret } = require('../config/environment')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Authorization required to perform this action. Please log in.'})

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, secret)
    .then(payload => {
      return User.findById(payload.sub)
    })
    .then(user => {
      req.currentUser = user
      next()
    })
    .catch(next)
}

function adminRoute(req, res, next) {
  if(!req.currentUser.admin) next({ name: 'NonAdminUser' })
  next()
}

module.exports = {
  secureRoute,
  adminRoute
}
