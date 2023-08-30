const db = require('../db');

class TotalCreditsModel {
  getAll() {
    return db('total_credits').select('*');
  }

  getById(totalCreditId) {
    return db('total_credits').where('total_credit_id', totalCreditId).first();
  }

  create(totalCreditData) {
    return db('total_credits').insert(totalCreditData);
  }

  update(totalCreditId, totalCreditData) {
    return db('total_credits').where('total_credit_id', totalCreditId).update(totalCreditData);
  }

  delete(totalCreditId) {
    return db('total_credits').where('total_credit_id', totalCreditId).del();
  }
}

module.exports = new TotalCreditsModel();
