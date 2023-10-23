const classesModel = require('../models/classes');
const studentsModel = require('../models/students');

class classesController {
    async createClass(req, res) {
        try {
            const classData = req.body;
            const newClass = await classesModel.createClass(classData);
            res.status(201).json({ message: 'Class created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getAllClasses(req, res) {
        try {
            const allClasses = await classesModel.getAllClasses();
            res.status(200).json(allClasses);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getClassbyId(req, res) {
        try {
            const classId = req.params.classId;
            const classById = await classesModel.getClassById(classId);
            if(!classById) {
                return res.status(404).json({ error: 'Class not found' });
            }
            const getStudents = await studentsModel.getStudentsByClass(classId)
            res.status(200).json({ class: classById, students: getStudents });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async updateClass(req, res) { 
        try {
            const classId = req.params.classId;
            const classData = req.body;
            const updatedClass = await classesModel.updateClass(classId, classData);
            if(!updatedClass) {
                return res.status(404).json({error: 'Class not found'})
            }
            res.status(200).json({ message: 'Class updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async deleteClass(req, res) {
        try {
            const classId = req.params.classId;
            const deletedClass = await classesModel.deleteClass(classId);
            res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
}

module.exports = new classesController();