const express = require('express')
const exphbs  = require('express-handlebars')
const controllers = require('./controllers')

const PORT = 3001
const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(controllers)

app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`))