const express = require('express')
const app = express()
const apiRouter = require('./routes/apiRouter')
const db = require('./db')

app.use(express.json())

app.listen (3000, () => {
    console.log('listening on http://localhost:3000')
})