const express = require('express')
const BlogPost = require('../models/blogPost')

const router = express.Router()

//Routes
router.get('/', (req, res) => {
    
    BlogPost.find({ })
    .then((data) => {
        console.log('Data', data)
        res.json(data)
    })
    .catch((error) => {
        console.log('error: ', error)
    })

})

router.get('/name', (req, res) => {
    const data = {
        username: 'joebob',
        age: 20
    }
    res.json(data)
})

module.exports = router