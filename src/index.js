import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import passport from 'passport'
import mongoose from 'mongoose'

import config from './config'

import routes from './routes'

const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(cors())

app.use(compression())

app.use(passport.initialize())
app.use(passport.session())

app.use(helmet())

mongoose
  .connect(config.mongoDB, {
    reconnectTries: 1000,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(
    () => {
      console.log('Connected on MongoDB')
    },
    err => console.log({
      error: err.message
    })
  )

app.use(
  (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized')
    }
  }
)

routes(app)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`)
})

export default app
