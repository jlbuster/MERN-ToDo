//import npm packages
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const routes = require('./routes/api')

//express setup
const app = express()
const PORT = process.env.PORT || 8080

mongoose.connect('mongodb://localhost/mern_todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.')
})

//Data Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//http request logger
app.use(morgan('tiny'))

app.use('/api', routes)

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
