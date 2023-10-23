const express = require('express')
const app = express()
const router = require('./routes/router')
const bodyParser = require('body-parser')
const port = process.env.port || 3000

app.use(express.json())
app.use('/api', router)

app.listen (port, () => {
    console.log(`listening on port ${port}`)
})