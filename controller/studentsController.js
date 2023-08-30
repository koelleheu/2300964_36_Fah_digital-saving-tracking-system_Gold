const studentsService = require('../services/studentsService');

class StudentsController {
  async getAllStudents(req, res) {
    const students = await studentsService.getAllStudents();
    res.json(students);
  }

  async getStudentById(req, res) {
    const { studentId } = req.params;
    const student = await studentsService.getStudentById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  }

  async createStudent(req, res) {
    const studentData = req.body;
    const result = await studentsService.createStudent(studentData);
    res.json({ message: 'Student created successfully', result });
  }

  async updateStudent(req, res) {
    const { studentId } = req.params;
    const studentData = req.body;
    const result = await studentsService.updateStudent(studentId, studentData);
    res.json({ message: 'Student updated successfully', result });
  }

  async deleteStudent(req, res) {
    const { studentId } = req.params;
    const result = await studentsService.deleteStudent(studentId);
    res.json({ message: 'Student deleted successfully', result });
  }
}

module.exports = new StudentsController();
