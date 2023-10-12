const express = require("express");
const AppController = require("../controllers/AppController");
const StudentsController = require("../controllers/StudentsController");
const router= express.Router();


router.get('/', (req, res) => {
    res.send(AppController.getHomepage(req, res))
});

router.get('/students', (req, res) => {
    res.send(StudentsController.getAllStudents(req, res));
});

router.get('/students/:major', (req, res) => {
    res.send(StudentsController.getAllStudentsByMajor(req, res));
});

module.exports = router;

