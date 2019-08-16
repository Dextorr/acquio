require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const routes = require('./config/routes')

const { dbURI } = require('./config/environment')
const errorHandler = require('./lib/errorHandler')

const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)


app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
