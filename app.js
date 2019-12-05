const path = require('path')
const favicon = require('serve-favicon')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')

const routes = require('./routes/routes')

const app = express()


app.set('view engine', 'pug')

app.set('views', path.join(__dirname, '/dist/views'))

app.use(favicon(path.join(__dirname, 'public/favicon.ico')))


app.use(bodyParser.urlencoded({extended: false}))

app.use('/static', express.static(path.resolve(__dirname, './dist')))

app.use(routes)


app.listen( process.env.port || 3000) 