const db = require('../db')

class SchoolYearModel {
    getAll() {
      return db('school_year').select('*');
    }
  
    getById(schoolYearId) {
      return db('school_year').where('year_id', yearId).first();
    }
  
  }
  
  module.exports = new SchoolYearModel();