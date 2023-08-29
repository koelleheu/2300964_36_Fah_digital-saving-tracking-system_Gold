const express = require ('express')
const app = express()
const knex = require('knex')
const knexfile = require('./knexfile').development

app.use(express.json())

app.get('/api/students', async (req,res) => {
    try {
        const students = await knex ('students')
        .select()
        .leftJoin('classes', 'students.class_id', 'classes.class_id')
        res.json(students)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'internal server error'
        })
    }
})

app.listen (3000, () => {
    console.log('listening on http://localhost:3000')
})