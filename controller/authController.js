const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db/db')

const rahasia = 'ini rahasia tidak boleh disebar'

const studentLogin = (req, res) => {
    const studentId = req.body.studentId
    const password = req.body.password

    db('students').where({
        student_id: studentId
    }).first()
    .then((student) => {
        if(!student) {
            return res.json({ message: 'Student not found'})
        }
        const isPasswordValid = bcrypt.compareSync(password, student.password)
        if(!isPasswordValid) {
            return res.json({ message: 'Wrong password' })
        }
        const accesToken = jwt.sign({
            student_id: student.student_id,
            role: student.role
        }, rahasia, { 
            expiresIn: 60 * 60
        })
        return res.json({
            firstName: student.first_name,
            accesToken: accesToken
        })
    }).catch((error) => {
        return res.json({ message: 'Internal server error', error: error.message})
    })
}

const adminLogin = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db('admins').where({
        username: username
    }).first()
    .then((admin) => {
        if(!admin) {
            return res.json({ message: 'User not found'})
        }
        const isPasswordValid = bcrypt.compareSync(password, admin.password)
        if(!isPasswordValid) {
            return res.json({ message: 'Wrong password' })
        }
        const accesToken = jwt.sign({
            username: admin.username,
            role: admin.role
        }, rahasia, { 
            expiresIn: 60 * 60
        })
        return res.json({
            username: admin.username,
            accesToken: accesToken
        })
    }).catch((error) => {
        return res.json({ message: 'Internal server error', error: error.message})
    })
}

const whoami = (req, res) => {
    const currentUser = req.user
    return res.json(currentUser)
}

module.exports = {
    studentLogin, adminLogin, whoami
}