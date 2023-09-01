const classes = require('../models/classes');

class classesController {
    async createClass(req, res) {
        try {
            const classData = req.body;
            const newClass = await classes.createClass(classData);
            res.status(201).json({ message: 'Class created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            db.destroy();
        }
    }

    async getAllClasses(req, res) {
        try {
            const allClasses = await classes.getAllClasses();
            res.status(200).json(allClasses);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getClassbyId(req, res) {
        try {
            const classId = req.params.classId;
            const classById = await classes.getClassById(classId);
            res.status(200).json(classById);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateClass(req, res) { 
        try {
            const classId = req.params.classId;
            const classData = req.body;
            const updatedClass = await classes.updateClass(classId, classData);
            res.status(200).json({ message: 'Class updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteClass(req, res) {
        try {
            const classId = req.params.classId;
            const deletedClass = await classes.deleteClass(classId);
            res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new classesController();