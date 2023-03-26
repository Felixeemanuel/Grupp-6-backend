const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const errandsController = require('./controllers/errandController')
const commentController = require('./controllers/commentController')
app.use('/api/errands', errandsController)
app.use('/api/comments', commentController)

module.exports = app

