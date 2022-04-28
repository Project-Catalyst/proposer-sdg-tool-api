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

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(xss())
app.use(cors())

//REQUEST HANDLERS
app.use('/api/v1/humanRights', humanRightsRoute)

// ERROR HANDLING
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
app.listen(port, async () => {
  await sequelize.authenticate()
  console.log("Successfuly connected to db...")
  console.log(`listening on port ${port}`)
})