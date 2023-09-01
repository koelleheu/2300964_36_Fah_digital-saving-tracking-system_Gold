const db = require('../db/db');

class classesModel {

  createClass(classData) {
    const { class_name } = classData;
    const newClass = db('classes').insert({ class_name });
    console.log('Class added succesfuly')
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

  updateClass(classId, classData) {
    const { class_name } = classData;
    const updatedClass = db('classes').where('class_id', classId).update({ class_name });
    return updatedClass;
  }

  deleteClass(classId) {
    const deletedClass = db('classes').where('class_id', classId).del();
    return deletedClass;
  }

}

module.exports = new classesModel();