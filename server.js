const path = require('path')
const express = require('express')

const PORT = 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// html routes
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')))
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')))

app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`))