import { Router } from 'express';

import {
  createStudent, getStudents, getOneStudent, updateOneStudent, deleteStudent,
} from '../middelwares/students';

import {
  checkEmail, checkPssword, checkFullName, validateInput,
} from '../middelwares/validateUserInput';

import { errorHandling } from '../middelwares/errorFunction';

const router = Router();

// 1 create new student
router.post('/', checkEmail, checkPssword, checkFullName, validateInput, errorHandling(createStudent));

// 2 get all students
router.get('/', getStudents);

// 3 get one students
router.get('/:id', getOneStudent);

// 4 update one userData
router.patch('/', checkEmail, checkFullName, validateInput, errorHandling(updateOneStudent));

// 5 delete student
router.delete('/', deleteStudent);

export const studentRoute: Router = router;
