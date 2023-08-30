const AdminsModel = require('../models/admins')

class AdminsService {
  async getAllAdmins() {
    return AdminsModel.getAll()
  }

  async getAdminById(adminId) {
    return AdminsModel.getAdminById(adminId)
  }

}

module.exports = new AdminsService();
