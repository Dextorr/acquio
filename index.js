const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/acquio', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use('/api', routes)


app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
