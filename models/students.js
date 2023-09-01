const db = require('../db/db');

class studentsModel {
  
  createStudent(studentData) {
    const { firstName, lastName, password, classId, birthDate } = studentData;
    const newStudent = db('students').insert({ 
      first_name: firstName, 
      last_name: lastName, 
      password: password, 
      class_id: classId, 
      birth_date: birthDate });
    console.log('Student added succesfuly')
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

  updateStudent(studentId, studentData) {
    const { first_name, last_name, password, class_id, birth_date } = studentData;
    const updatedStudent = db('students').where('student_id', studentId).update({ 
      first_name, 
      last_name, 
      password, 
      class_id, 
      birth_date });
    return updatedStudent;
  }

  deleteStudent(studentId) {
    const deletedStudent = db('students').where('student_id', studentId).del();
    return deletedStudent;
  }

}

module.exports = new studentsModel;
