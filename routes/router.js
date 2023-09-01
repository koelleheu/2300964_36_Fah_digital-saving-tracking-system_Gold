const express = require('express');
const classesController = require('../controller/classes.controller');
const studentsController = require('../controller/studentsController');

const router = express.Router();

//classes
router.get('/classes', classesController.getAllClasses);
router.get('/classes/:classId', classesController.getClassbyId);
router.post('/classes', classesController.createClass);
router.put('/classes/:classId', classesController.updateClass);
router.delete('/classes/:classId', classesController.deleteClass);

//students
// router.get('/students', studentsController.getStudents);
router.post('/students', studentsController.createStudent);

module.exports = router;
