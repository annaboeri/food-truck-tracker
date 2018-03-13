const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  axios = require('axios'),
  httpClient = axios.create(),
  ejsLayouts = require('express-ejs-layouts'),
  PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(ejsLayouts)

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})