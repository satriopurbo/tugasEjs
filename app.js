const express = require('express')
const app = express()
const morgan = require('morgan')
const routing = require('./router/index')
const session = require('express-session')

app.use(express.static('assets'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(session({
    secret: 'sehat',
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 6000000 }
  }))

app.use('/', routing)

const port = 3001;
app.listen(port,()=>{
    console.log(`tersambung ke port ${port}`)
})