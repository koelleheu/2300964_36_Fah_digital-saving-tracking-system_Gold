const LevelsModel = require('../models/levels')

class LevelsModel {
    getAllLevels() {
      return LevelsModel.getAll()
    }
  
    getLevelsById(levelsId) {
      return LevelsModel.getLevelsById(levelsId)
    }
  
  }
  
  module.exports = new LevelsService();