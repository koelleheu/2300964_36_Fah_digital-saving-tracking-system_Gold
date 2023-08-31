const db = require('../db');

class ClassesModel {
  async getAll() {
    return db('classes').select('*');
  }

  async getById(classId) {
    return db('classes').where('class_id', classId).first();
  }

}

module.exports = new ClassesModel();
