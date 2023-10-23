const periodModel = require('../models/period')
const levelsModel = require('../models/levels')

class periodController {

    async getAllPeriods(req, res) {
        try {
            const allPeriods = await periodModel.getAllPeriods()
            res.status(200).json(allPeriods)
        } catch (error) {
            res.status(500).json({message: 'Internal server error', error: error.message})
        }
    }

    async createPeriod(req, res) {
        try {
            const periodData = req.body
            await periodModel.createPeriod(periodData)
            res.status(201).json({message: 'Period created succesfully'})
        } catch (error) {
            res.status(500),json({message: 'Internal server error', error: error.message})
        }
    }

    async getPeriod(req, res) {
        try {
            const periodId = req.params.periodId
            const period = await periodModel.getPeriod(periodId)
            if(!period) {
                return res.status(404).json({error: 'Period year not found'})
            }
            const getLevelByPeriod = await levelsModel.getLevelByPeriod(periodId)
            res.status(200).json({period: period, levels: getLevelByPeriod})
        } catch (error) {
            res.status(500).json({message: 'Internal server error', error: error.message})
        }
    }

    async updatePeriod(req, res) {
        try {
            const periodId = req.params.periodId
            const periodData = req.body
            const updatedPeriod = await periodModel.updatePeriod(periodId, periodData)
            if(!updatedPeriod) {
                return res.status(404).json({ error: 'Period not found' })};
            res.status(201).json({message: 'Period updated succesfully'})
        } catch (error) {
            res.status(500).json({message: 'Internal server error', error: error.message})
        }
    }
    
}

module.exports = new periodController()