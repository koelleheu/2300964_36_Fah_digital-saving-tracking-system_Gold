const express = require('express');
const classesController = require('../controller/classesController');
const studentsController = require('../controller/studentsController');
const creditsController = require('../controller/creditsController');

const router = express.Router();

//classes
router.get('/classes', classesController.getAllClasses);
router.get('/classes/:classId', classesController.getClassbyId);
router.post('/classes', classesController.createClass);
router.put('/classes/:classId', classesController.updateClass);
router.delete('/classes/:classId', classesController.deleteClass);

//students
router.get('/students', studentsController.getStudents);
router.get('/students/:studentId', studentsController.getStudentById);
router.post('/students', studentsController.createStudent);
router.put('/students/:studentId', studentsController.updateStudent);
router.delete('/students/:studentId', studentsController.deleteStudent);

//credits
router.get('/credits', creditsController.getDailyCredit);
router.get('/credits/:studentId', creditsController.getAllCredits)
router.get('/credits/total/:studentId', creditsController.getTotalCredit);
router.post('/credits', creditsController.addCredit);
router.put('/credits', creditsController.updateDailyCredit)
router.delete('/credits', creditsController.deleteDailyCredit)

module.exports = router;
