const router = require('express').Router();

const { Campus, Student } = require('../db/models');

// Get all students
router.get('/', (req, res, next) => {
    Student.findAll()
        .then(students => res.json(students))
        .catch(next);
});