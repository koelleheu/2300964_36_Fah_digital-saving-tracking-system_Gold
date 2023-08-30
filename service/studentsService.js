const studentsModel = require('../models/students');

class StudentsService {
  getAllStudents() {
    return studentsModel.getAll();
  }

  getStudentById(studentId) {
    return studentsModel.getById(studentId);
  }

  createStudent(studentData) {
    return studentsModel.create(studentData);
  }

  updateStudent(studentId, studentData) {
    return studentsModel.update(studentId, studentData);
  }

  deleteStudent(studentId) {
    return studentsModel.delete(studentId);
  }
}

module.exports = new StudentsService();
