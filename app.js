const express = require('express')
const app = express()

const errandsController = require('./controllers/errandController')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/errands', errandsController)

module.exports = app