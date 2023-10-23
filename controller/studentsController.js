const studentsModel = require('../models/students');
const creditsModel = require('../models/credits');

class studentsController {

    async createStudent(req, res) {
        try {
            const studentData = req.body;
            await studentsModel.createStudent(studentData);
            res.status(201).json({ message: 'Student created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getStudents(req, res) {
        try {
            const allStudents = await studentsModel.getStudents();
            res.status(200).json(allStudents);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
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
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async updateStudent(req, res) {
        try {
            const studentId = req.params.studentId;
            const studentData = req.body;
            const updatedStudent = await studentsModel.updateStudent(studentId, studentData);
            if(!updatedStudent) {
                return res.status(404).json({ error: 'Student not found' })};
            res.status(200).json({ message: 'Student updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async deleteStudent(req, res) {
        try {
            const studentId = req.params.studentId;
            await studentsModel.deleteStudent(studentId);
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

}

module.exports = new studentsController();