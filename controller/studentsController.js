const studentsModel = require('../models/students');
const creditsModel = require('../models/credits');

class studentsController {

    async createStudent(req, res) {
        try {
            const studentData = req.body;
            await studentsModel.createStudent(studentData);
            res.status(201).json({ message: 'Student created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            db.destroy();
        }
    }

    async getStudents(req, res) {
        try {
            const allStudents = await studentsModel.getStudents();
            res.status(200).json(allStudents);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getStudentById(req, res) {
        try {
            const studentId = req.params.studentId;
            const studentById = await studentsModel.getStudentById(studentId);
            if(!studentById) {
                return res.status(404).json({ error: 'Student not found' })};
            const studentCredits = await creditsModel.getTotalCredit(studentId);
            res.status(200).json({student: studentById, totalCredits: studentCredits});
            }
         catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateStudent(req, res) {
        try {
            const studentId = req.params.studentId;
            const studentData = req.body;
            await studentsModel.updateStudent(studentId, studentData);
            res.status(200).json({ message: 'Student updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteStudent(req, res) {
        try {
            const studentId = req.params.studentId;
            await studentsModel.deleteStudent(studentId);
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}

module.exports = new studentsController();