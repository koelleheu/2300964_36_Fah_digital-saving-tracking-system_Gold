const db = require('../db/db');

class classesModel {

  createClass(classData) {
    const { className, levelId } = classData;
    const newClass = db('classes').insert({ 
      class_name: className,
      level_id: levelId });
    return newClass;
  }

  getAllClasses() {
    const classes = db('classes').select('*');
    return classes
  }

  getClassById(classId) {
    const classById = db('classes').where('class_id', classId).first();
    return classById;
  }

  getClassByLevel(levelId) {
    const classByLevel = db('classes').where('level_id', levelId).select('*')
    return classByLevel
  }

  updateClass(classId, classData) {
    const { className, levelId } = classData;
    const updatedClass = db('classes').where('class_id', classId).update({
       class_name: className,
       level_id: levelId });
    return updatedClass;
  }

  deleteClass(classId) {
    const deletedClass = db('classes').where('class_id', classId).del();
    return deletedClass;
  }

}

module.exports = new classesModel();