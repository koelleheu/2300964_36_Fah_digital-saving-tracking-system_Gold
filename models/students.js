const db = require('../db');

class StudentsModel {
  getAll() {
    return db('students').select('*');
  }

  getById(studentId) {
    return db('students').where('student_id', studentId).first();
  }

  create(studentData) {
    return db('students').insert(studentData);
  }

  update(studentId, studentData) {
    return db('students').where('student_id', studentId).update(studentData);
  }

  delete(studentId) {
    return db('students').where('student_id', studentId).del();
  }
}

module.exports = new StudentsModel();