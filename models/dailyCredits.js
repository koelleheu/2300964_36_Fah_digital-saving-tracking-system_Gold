const db = require('../db');

class CreditsModel {
  getAll() {
    return db('daily_credits').select('*');
  }

  getById(creditId) {
    return db('daily_credits').where('credit_id', creditId).first();
  }

  create(creditData) {
    return db('daily_credits').insert(creditData);
  }

  update(credittId, creditData) {
    return db('daily_credits').where('credit_id', creditId).update(creditData);
  }

  delete(creditId) {
    return db('daily_credits').where('credit_id', creditId).del();
  }
}

module.exports = new CreditsModel();
