const express = require('express')
const app = express()
const router = require('./routes/router')
const bodyParser = require('body-parser')

app.use(express.json())
app.use('/api', router)

app.listen (3000, () => {
    console.log('listening on http://localhost:3000')
})