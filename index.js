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

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})