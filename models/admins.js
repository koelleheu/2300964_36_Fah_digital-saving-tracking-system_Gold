const db = require('../db/db')

class adminsModel {

    createAdmin(adminData) {
        const {username, password, role} = adminData
        const admin = db('admins').insert({
            username: username,
            password: password,
            role: role
        })
        return admin
    }

    getAdmin(adminId) {
        const admin = db('admins').where('admin_id', adminId).first()
        return admin
    }

    updateAdmin(adminId, adminData) {
        const {username, password, role} = adminData
        const admin = db('admins').where('admin_id', adminId).update({
            username: username,
            password: password,
            role: role
        })
        return admin
    }

    deleteAdmin(adminId) {
        const admin = db('admins').where('admin_id', adminId).del()
        return admin
    }
}

module.exports = new adminsModel()