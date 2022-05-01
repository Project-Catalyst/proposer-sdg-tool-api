const express = require('express')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const app = express()
const { sequelize } = require('./db')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// ROUTES
const humanRightsRoute = require('./routes/human-rights')
const sdgGoalsRoute = require('./routes/sdg-goals')
const subgoalsRoute = require('./routes/subgoals')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(xss())
app.use(cors())

//REQUEST HANDLERS
// app.use('/api/v1/humanRights', humanRightsRoute)
app.use('/api/v1/sdgGoals', sdgGoalsRoute)
app.use('/api/v1/subgoals', subgoalsRoute)
// app.use('/api/v1/test', (req, res) => {
//   console.log("calling endpoint")
//   res.status(200).json({ msg: "success" })
// })

// ERROR HANDLING
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
    debugger
    console.log(error)
  }
}

start()
