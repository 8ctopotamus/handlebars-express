const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')

const PORT = 3001
const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// html routes
app.get('/', (req, res) => res.render('index'))

app.get('/about', (req, res) => res.render('about'))

app.get('/contact', (req, res) => res.render('contact'))

app.get('/services', (req, res) => res.render('services'))

app.get('/blog', (req, res) => res.render('blog'))

app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`))