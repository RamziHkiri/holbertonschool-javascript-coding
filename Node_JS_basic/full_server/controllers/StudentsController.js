class StudentsController {
  static getAllStudents(req, res) {
    res.status(200).send('get all students!');
  }
  static getAllStudentsByMajor(req, res) {
    res.status(200).send('get all students!MAJOR');
  }
}

module.exports = StudentsController;