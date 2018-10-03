// require('dotenv-safe').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const passport = require('passport')
const app = express()
// const initMongo = require('./config/mongo')

// Setup express server
app.set('port', process.env.PORT || 5000)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) /* for parsing application/x-www-form-urlencoded ~*/
app.use(cors())
app.use(passport.initialize())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))
app.use(require('./app/routes'))
app.listen(app.get('port'))

// Init MongoDB
// initMongo()

module.exports = app // for testing
