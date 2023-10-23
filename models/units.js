const db = require('../db/db');

class unitsModel {

  createUnit(unitData) {
    const { unitName } = unitData;
    const newUnit = db('units').insert({ 
        unit_name: unitName });
    return newUnit;
  }

  getAllUnits() {
    const units = db('units').select('*');
    return units
  }

  getUnitById(unitId) {
    const unitById = db('units').where('unit_id', unitId).first();
    return unitById;
  }

  updateUnit(unitId, unitData) {
    const { unitName } = unitData;
    const updatedUnit = db('units').where('unit_id', unitId).update({ 
        unit_name: unitName });
    return updatedUnit;
  }

  deleteUnit(unitId) {
    const deletedUnit = db('units').where('unit_id', unitId).del();
    return deletedUnit;
  }

}

module.exports = new unitsModel();