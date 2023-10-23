const levelsModel = require('../models/levels');
const classesModel = require('../models/classes');

class levelsController {
    async createLevel(req, res) {
        try {
            const levelData = req.body;
            await levelsModel.createLevel(levelData);
            res.status(201).json({ message: 'Level created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getAllLevels(req, res) {
        try {
            const allLevels = await levelsModel.getAllLevels();
            res.status(200).json(allLevels);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getLevel(req, res) {
        try {
            const levelId = req.params.levelId;
            const levelById = await levelsModel.getLevel(levelId);
            if(!levelById) {
                return res.status(404).json({ error: 'Level not found' });
            }
            const getClasses = await classesModel.getClassByLevel(levelId)
            res.status(200).json({ level: levelById, classes: getClasses });
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async updateLevel(req, res) {
        try {
            const levelId = req.params.levelId
            const levelData = req.body
            const updatedLevel = await levelsModel.updateLevel(levelId, levelData)
            if(!updatedLevel) {
                return res.status(404).json({ error: 'Level not found' })};
            res.status(201).json({message: 'Level updated succesfully'})
        } catch (error) {
            console.error('Error', error)
            res.status(500).json({message: 'Internal server error', error: error.message})
        }
    }

    // async deleteClass(req, res) {
    //     try {
    //         const classId = req.params.classId;
    //         const deletedClass = await classesModel.deleteClass(classId);
    //         res.status(200).json({ message: 'Class deleted successfully' });
    //     } catch (error) {
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // }
}

module.exports = new levelsController();