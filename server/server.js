const express = require('express')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const app = express()
const a = require('express-async-errors');
const { sequelize } = require('./db')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// ROUTES
const sdgGoalsRoute = require('./routes/sdg-goals')
const subgoalsRoute = require('./routes/subgoals')
const keywordsRoute = require('./routes/keywords')
const countriesRoute = require('./routes/countries')
const regionsRoute = require('./routes/regions')
const themesRoute = require('./routes/themes')
const metricsRoute = require('./routes/metrics')
const humanRightsRoute = require('./routes/human-rights')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(xss())
app.use(cors())

//REQUEST HANDLERS
app.use('/api/v1/keywords', keywordsRoute)
app.use('/api/v1/countries', countriesRoute)
app.use('/api/v1/regions', regionsRoute)
app.use('/api/v1/themes', themesRoute)
app.use('/api/v1/sdgGoals', sdgGoalsRoute)
app.use('/api/v1/subgoals', subgoalsRoute)
app.use('/api/v1/metrics', metricsRoute)
app.use('/api/v1/humanRights', humanRightsRoute)

// ERROR HANDLING MIDDLEWARE
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
  try {
    app.listen(port, async () => {
      await sequelize.authenticate()
      console.log("Successfuly connected to db...")
      console.log(`listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
