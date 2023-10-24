const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port || 3000
const passport = require('./lib/passport')

app.use(express.json())

app.use(express.urlencoded({
    extended: false,
}))

app.use(passport.initialize())

const router = require('./routes/router')

app.use('/api', router)

app.listen (port, () => {
    console.log(`listening on port ${port}`)
})