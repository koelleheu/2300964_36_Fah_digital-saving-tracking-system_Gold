const db = require('../db/db');

class dailyCreditsModel {

  addCredit(creditData) {
    const { studentId, creditDate, creditAmount } = creditData;
    const newCredit = db('daily_credit').insert({
      student_id: studentId,
      credit_date: creditDate,
      amount: creditAmount})
      console.log('Credit added succesfuly')
      return newCredit;
  }

  getAllCredits(studentId) {
    const credits = db('daily_credit')
    .where('student_id', studentId)
    .select('*');
    return credits
  }

  getDailyCredit(studentId, creditDate) {
    const dailyCredit = db('daily_credit')
    .where('student_id', studentId)
    .andWhere('credit_date', creditDate)
    .first();
    return dailyCredit;
  }

  updateDailyCredit(creditData) {
    const { studentId, creditDate, creditAmount } = creditData;
    const updatedCredit = db('daily_credit')
    .where('student_id', studentId)
    .andWhere('credit_date', creditDate)
    .update({ 
    amount: creditAmount });
    console.log('Credit updated succesfuly')
    return updatedCredit;
  }

  deleteDailyCredit(creditData) {
    const { studentId, creditDate } = creditData;
    const deletedCredit = db('daily_credit')
    .where('student_id', studentId)
    .andWhere('credit_date', creditDate)
    .del();
    console.log('Credit deleted succesfuly')
    return deletedCredit;
  }

  getTotalCredit(studentId) {
    return db('daily_credit')
      .where({ student_id: studentId })
      .sum('amount as total_amount')
      .then((result) => {
        return result[0].total_amount || 0;
      });
  }
}



module.exports = new dailyCreditsModel();
