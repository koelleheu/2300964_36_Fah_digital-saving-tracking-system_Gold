const unitsModel = require('../models/units');

class UnitsService {
  getAllUnits() {
    return unitsModel.getAll();
  }

  getUnitById(unitId) {
    return unitsModel.getById(unitId);
  }

}

module.exports = new UnitsService();
