const classesModel = require('../models/classes');
const studentsService = require('./studentsService');

class ClassesService {
  async getAllClasses() {
    return classesModel.getAll();
  }

  async getClassById(classId) {
    return classesModel.getById(classId);
  }

  async getStudentsInClass(classId) {
    const myClass = await this.getClassById(classId);
    if (!myClass) {
      throw new Error('Class not found');
    }
    const students = await studentsService.getStudentsByClassId(classId);
    return { class: myClass, students };
  }

  // Add other methods for handling class-related functionality
}

module.exports = new ClassesService();
