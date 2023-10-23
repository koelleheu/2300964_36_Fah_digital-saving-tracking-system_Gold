const unitsModel = require('../models/units');
const periodModel = require('../models/period');

class unitsController {
    async createUnit(req, res) {
        try {
            const unitData = req.body;
            await unitsModel.createUnit(unitData);
            res.status(201).json({ message: 'Unit created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getAllUnits(req, res) {
        try {
            const allUnits = await unitsModel.getAllUnits();
            res.status(200).json(allUnits);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getUnitbyId(req, res) {
        try {
            const unitId = req.params.unitId;
            const unitById = await unitsModel.getUnitById(unitId);
            if(!unitById) {
                return res.status(404).json({ error: 'Unit not found' });
            }
            const getPeriodByUnit = await periodModel.getPeriodByUnit(unitId)
            res.status(200).json({unit: unitById, period: getPeriodByUnit});
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async updateUnit(req, res) { 
        try {
            const unitId = req.params.unitId;
            const unitData = req.body;
            const updatedUnit = await unitsModel.updateUnit(unitId, unitData);
            if(!updatedUnit) {
                return res.status(404).json({ error: 'Unit not found' });
            }
            res.status(200).json({ message: 'Unit updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async deleteUnit(req, res) {
        try {
            const unitId = req.params.unitId;
            await unitsModel.deleteUnit(unitId);
            res.status(200).json({ message: 'Unit deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
}

module.exports = new unitsController();