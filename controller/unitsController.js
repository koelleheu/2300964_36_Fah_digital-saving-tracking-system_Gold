const unitsService = require('../services/unitsService');

class UnitsController {
  async getAllUnits(req, res) {
    const units = await unitsService.getAllUnits();
    res.json(units);
  }

  async getUnitById(req, res) {
    const { unitId } = req.body;
    const unit = await unitsService.getUnitById(unitId);
    if (!unit) {
      return res.status(404).json({ message: 'Unit not found' });
    }
    res.json(unit);
  }

}

module.exports = new UnitsController();
