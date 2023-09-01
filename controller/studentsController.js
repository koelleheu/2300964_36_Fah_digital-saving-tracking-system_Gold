const studentsModel = require('../models/students');

class studentsController {

    async createStudent(req, res) {
        try {
            const studentData = req.body;
            await studentsModel.createStudent(studentData);
            res.status(201).json({ message: 'Student created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            db.destroy();
        }
    }

    // async getStudents(req, res) {
    //     try {
    //         const allStudents = await students.getStudents();
    //         res.status(200).json(allStudents);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // }

//     async getStudentById(req, res) {
//         try {
//             const studentId = req.params.studentId;
//             const student = await studentsModel.getStudentById(studentId);
//             res.status(200).json(student);
//         } catch (error) {
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     }

//     async updateStudent(req, res) {
//         try {
//             const studentId = req.params.studentId;
//             const studentData = req.body;
//             await studentsModel.updateStudent(studentId, studentData);
//             res.status(200).json({ message: 'Student updated successfully' });
//         } catch (error) {
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     }

//     async deleteStudent(req, res) {
//         try {
//             const studentId = req.params.studentId;
//             await studentsModel.deleteStudent(studentId);
//             res.status(200).json({ message: 'Student deleted successfully' });
//         } catch (error) {
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     }

}

module.exports = new studentsController();