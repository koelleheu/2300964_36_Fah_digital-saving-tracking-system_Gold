const db = require('../db');

class AdminsModel {
  async getAll() {
    return db('admins').select('*');
  }

  async getById(adminId) {
    return db('admins').where('admin_id', adminId).first();
  }

}

module.exports = new AdminsModel();
