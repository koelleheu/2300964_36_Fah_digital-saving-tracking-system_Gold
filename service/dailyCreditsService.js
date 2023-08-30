const CreditsModel = require('../models/dailyCredits');

class CreditService {
  getAllCredits() {
    return CreditsModel.getAll();
  }

  getCreditsById(creditId) {
    return CreditsModel.getCreditsById(creditId);
  }

  createCredit(creditData) {
    return CreditsModel.create(creditData);
  }

  updateCredit(creditId, creditData) {
    return CreditsModel.update(creditId, creditData);
  }

  deleteCredit(creditId) {
    return creditsModel.delete(creditId);
  }
}

module.exports = new CreditService();