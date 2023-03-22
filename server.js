require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const PORT = process.env.PORT || 9999

app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))
mongoose.connect('mongodb+srv://Admin:Admin@kyh-test.ftmmiwm.mongodb.net/Support?retryWrites=true&w=majority')
    mongoose.connection.on('connected', () => {
        console.log('Connected to db')
    })

