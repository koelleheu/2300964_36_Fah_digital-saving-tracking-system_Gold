const TotalCreditsModel = require('../models/dailyCredits');

class TotalCreditService {
  getAllCredits() {
    return TotalCreditsModel.getAll();
  }

  getTotalCreditsById(totalCreditId) {
    return TotalCreditsModel.getCreditsById(totalCreditId);
  }

  createTotalCredit(creditData) {
    return TotalCreditsModel.create(totalCreditData);
  }

  updateTotalCredit(totalCreditId, totalCreditData) {
    return TotalCreditsModel.update(totalCreditId, totalCreditData);
  }

  deleteTotalCredit(creditId) {
    return TotalCreditsModel.delete(totalCreditId);
  }
}

module.exports = new TotalCreditService();