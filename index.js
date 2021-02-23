const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { Model } = require('objection');
const dbConfig = require('./knexfile').development;

const app = express();
const db = knex(dbConfig);

Model.knex(db);

app.use(cors());

class Course extends Model {
  static tableName = "course";
}

class Student extends Model {
  static tableName = "student";

  static relationMappings = {
    courses: {
      relation: Model.ManyToManyRelation,
      modelClass: Course,
      join: {
        from: "student.id",
        through: {
          from: "enrollment.student_id",
          to: "enrollment.course_id",
        },
        to: "course.id"
      }
    }
  }
}

app.get('/', (req, res) => {
  res.json({ message: "You're in death valley" });
});

app.get('/students', (req, res) => {
  Student.query()
    .then(students => {
      res.json({ students });
  });
});

app.get('/courses', (req, res) => {
  Course.query()
    .then(courses => {
      res.json({ courses });
  });
});

app.get('/enrollment', (req, res) => {
  Student.query().withGraphFetched("courses")
    .then(students => {
      res.json({ students });
    }).catch(err => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

app.listen(4000, () => { console.log("Express\t:::\t4000"); });
