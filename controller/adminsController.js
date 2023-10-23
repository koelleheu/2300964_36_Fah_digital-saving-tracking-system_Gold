const adminsModel = require('../models/admins')

class adminsController {

    async createAdmin(req, res) {
        try {
            const adminData = req.body;
            await adminsModel.createAdmin(adminData);
            res.status(201).json({ message: 'Admin created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async getAdminById(req, res) {
        try {
            const adminId = req.params.adminId;
            const adminById = await adminsModel.getAdmin(adminId);
            if(!adminById) {
                return res.status(404).json({ error: 'Admin not found' })};
            res.status(200).json(adminById)
            }
         catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async updateAdmin(req, res) {
        try {
            const adminId = req.params.adminId
            const adminData = req.body;
            await adminsModel.updateAdmin(adminId, adminData);
            res.status(201).json({ message: 'Admin updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    async deleteAdmin(req, res) {
        try {
            const adminId = req.params.adminId
            await adminsModel.deleteAdmin(adminId)
            res.status(201).json({ message: 'Admin deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
}

module.exports = new adminsController()