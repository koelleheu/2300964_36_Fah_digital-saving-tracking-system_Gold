const SchoolYearModel = require('../models/shcoolYear');

class SchoolYearService {
  getAllYear() {
    return SchoolYearModel.getAll();
  }

  getYearById(yearId) {
    return SchoolYearModel.getYearById(yearId);
  }

}

module.exports = new SchoolYearService();
