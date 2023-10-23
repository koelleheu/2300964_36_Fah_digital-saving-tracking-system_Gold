const db = require('../db/db')

class levelsModel {
    
    createLevel(levelData) {
        const { levelName, periodId } = levelData;
        const newLevel = db('levels').insert({
            level_name: levelName,
            period_id: periodId
        });
        return newLevel
    }

    getAllLevels() {
        const levels = db('levels').select('*')
        return levels
    }

    getLevel(levelId) {
        const level = db('levels').where('level_id', levelId).first()
        return level
    }

    getLevelByPeriod(periodId) {
        const level = db('levels').where('period_id', periodId).select('*')
        return level
    }

    updateLevel(levelId, levelData) {
        const { levelName, periodId } = levelData;
        const updatedLevel = db('levels').where('level_id', levelId).update({
            level_name: levelName,
            period_id: periodId
        });
        return updatedLevel
    }

}

module.exports = new levelsModel()