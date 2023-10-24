const db = require('../db/db');
const bcrypt = require('bcrypt')

class studentsModel {
  
  createStudent(studentData) {
    const { studentId, firstName, lastName, password, classId, birthDate, role } = studentData;
    const encryptedPassword = bcrypt.hashSync(password, 10)
    const newStudent = db('students').returning('student_id').insert({
      student_id: studentId,
      first_name: firstName, 
      last_name: lastName, 
      password: encryptedPassword, 
      class_id: classId, 
      birth_date: birthDate,
      role: role });
    return newStudent;
  }

  getStudents() {
    const students = db('students').select('*');
    return students
  }

  getStudentById(studentId) {
    const studentById = db('students').where('student_id', studentId).first();
    return studentById;
  }

  getStudentsByClass(classId) {
    const studentsByClass = db('students').where('class_id', classId).select('*');
    return studentsByClass;
  }

  updateStudent(studentId, studentData) {
    const { firstName, lastName, classId, birthDate, role } = studentData;
    const updatedStudent = db('students').where('student_id', studentId).update({ 
      first_name: firstName, 
      last_name: lastName, 
      class_id: classId, 
      birth_date: birthDate,
      role: role  });
    return updatedStudent;
  }

  deleteStudent(studentId) {
    const deletedStudent = db('students').where('student_id', studentId).del();
    return deletedStudent;
  }

}

module.exports = new studentsModel;
