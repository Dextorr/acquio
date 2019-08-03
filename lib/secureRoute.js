const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

const { secret } = require('../config/environment')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'You do not have authorization to perform this action. Please log in.'})

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, secret)
    .then(payload => {
      const now = Math.floor(Date.now() / 1000)
      if (now > payload.exp) throw new Error('Token expired. Please log in again.')
      return User.findById(payload.sub)
    })
    .then(user => {
      if(!user) throw new Error('User not found')
      req.currentUser = user
      next()
    })
    .catch(err => console.log(err))
}

module.exports = secureRoute
