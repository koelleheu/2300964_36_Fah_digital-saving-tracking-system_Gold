const db = require('../db/db');

class DailyCreditsModel {
  async getByStudentId(studentId){
    return db('daily_credits').where('student_id', studentId)
  }
    
  async create(studentId, creditDate, amount) {
    return db('daily_credits').insert({ student_id: studentId, credit_date: creditDate, amount });
  }

  async update(studentId, updatedData) {
    return db('daily_credits').where('student_id', studentId).update(updatedData);
  }

  async remove(studentId) {
    return db('daily_credits').where('student_id', studentId).del();
  }
}

class TotalCreditsModel {
  async getByStudentId(studentId){
    return db('total_credits').where('student_id', studentId)
  }
  
  async update(studentId, totalAmount) {
    return db('total_credits').where('student_id', studentId).update({ total_amount: totalAmount });
  }
}

module.exports = {
  daily: new DailyCreditsModel(),
  total: new TotalCreditsModel()
};
