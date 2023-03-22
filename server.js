const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: '.env' })
const app = express()

const PORT = process.env.PORT
// const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))
mongoose.connect(mongoURI)
    mongoose.connection.on('connected', () => {
        console.log('Connected to db')
    })



