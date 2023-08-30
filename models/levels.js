const db = require('../db')

class LevelsModel {
    getAll() {
      return db('levels').select('*');
    }
  
    getById(levelsId) {
      return db('levels').where('level_id', levelsId).first();
    }
  
  }
  
  module.exports = new LevelsModel();