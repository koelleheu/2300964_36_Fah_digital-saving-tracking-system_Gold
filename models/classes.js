const db = require('../db');

class ClassesModel {
  async getAll() {
    return db('Classes').select('*');
  }

  async getById(classId) {
    return db('Classes').where('class_id', classId).first();
  }

}

module.exports = new ClassesModel();
