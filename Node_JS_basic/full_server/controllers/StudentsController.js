const { readDatabase } = require('./full_server/utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
  static getAllStudentsByMajor(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = StudentsController;