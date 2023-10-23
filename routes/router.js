const express = require('express');
const classesController = require('../controller/classesController');
const studentsController = require('../controller/studentsController');
const creditsController = require('../controller/creditsController');
const unitsController = require('../controller/unitsController');
const periodController = require('../controller/periodController');
const levelsController = require('../controller/levelsController');
const adminsController = require('../controller/adminsController');
const admins = require('../models/admins');


const router = express.Router();

//units
router.get('/units', unitsController.getAllUnits)
router.get('/units/:unitId', unitsController.getUnitbyId)
router.post('/units', unitsController.createUnit)
router.put('/units/:unitId', unitsController.updateUnit)
router.delete('/units/:unitId', unitsController.deleteUnit)

//period
router.get('/period', periodController.getAllPeriods)
router.get('/period/:periodId', periodController.getPeriod)
router.post('/period', periodController.createPeriod)
router.put('/period/:periodId', periodController.updatePeriod)

//levels
router.get('/levels', levelsController.getAllLevels)
router.get('/levels/:levelId', levelsController.getLevel)
router.post('/levels', levelsController.createLevel)
router.put('/levels/:levelId', levelsController.updateLevel)


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

//admins
router.get('/admins/:adminId', adminsController.getAdminById)
router.post('/admins', adminsController.createAdmin)
router.put('/admins/:adminId', adminsController.updateAdmin)
router.delete('/admins/:adminId', adminsController.deleteAdmin)

module.exports = router;
