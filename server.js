//import npm packages
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

//express setup
const app = express()

//port setup
const PORT = process.env.PORT || 8080

const MONGODB_URI = 'mongodb+srv://jlbuster:clubbadguy@jblume.w1mds.mongodb.net/todoproject?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.')
})

// schema
const Schema = mongoose.Schema
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
})

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

//Saving data to out mongo database
const data ={
    title: 'Welcome to my Blog',
    body: "Hello! I'm a full stack developer!"
}

const newBlogPost = new BlogPost(data)

// newBlogPost.save((error) => {
//     if (error) {
//         console.log('Error saving')
//     } else {
//         console.log('Data has been saved!!')
//     }
// })

//http request logger
app.use(morgan('tiny'))

app.get('/api', (req, res) => {
    
    BlogPost.find({ })
    .then((data) => {
        console.log('Data', data)
        res.json(data)
    })
    .catch((error) => {
        console.log('error: ', error)
    })

})

app.get('/api/name', (req, res) => {
    const data = {
        username: 'joebob',
        age: 20
    }
    res.json(data)
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
