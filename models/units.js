const db = require('../db')

class UnitsModel {
  getAll() {
    return db('units').select('*');
  }

  getById(unitId) {
    return db('units').where('unit_id', unitId).first();
  }

}

module.exports = new UnitsModel();
