const router = require('express').Router()
const blogPosts = require('../models/blogPosts')

// html routes
router.get('/', (req, res) => {
  res.render('index', { 
    name: 'Josh',
    date: new Date()
  })
})

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

router.get('/services', (req, res) => res.render('services'))

router.get('/blog', (req, res) => {
  res.render('blog', {
    posts: blogPosts
  })
})

router.get('/blog/:slug', (req, res) => {
  const postObj = blogPosts
    .find(post => req.params.slug === post.slug)

  res.render('post', postObj)
})

module.exports = router