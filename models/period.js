const db = require('../db/db')

class periodModel {
    
    createPeriod(periodData) {
        const { yearStart, yearEnd, unitId } = periodData;
        const newPeriod = db('period').insert({
            year_start: yearStart,
            year_end: yearEnd,
            unit_id: unitId
        });
        return newPeriod
    }

    getAllPeriods() {
        const periods = db('period').select('*')
        return periods
    }

    getPeriod(periodId) {
        const period = db('period').where('period_id', periodId).first()
        return period
    }

    getPeriodByUnit(unitId) {
        const period = db('period').where('unit_id', unitId).first()
        return period
    }
 
    updatePeriod(periodId, periodData) {
        const { yearStart, yearEnd, unitId } = periodData;
        const updatedPeriod = db('period').where('period_id', periodId).update({
            year_start: yearStart,
            year_end: yearEnd,
            unit_id: unitId
        });
        return updatedPeriod
    }

    deletePeriod(yearStart) {
        const deletedPeriod = db('period').where('year_start', yearStart)
        return deletedPeriod
    }

}

module.exports = new periodModel()