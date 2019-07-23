require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const mongoose = require('mongoose')

const { dbURI } = require('./config/environment')

const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(bodyParser.json())
app.use('/api', routes)


app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
