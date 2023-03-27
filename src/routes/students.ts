import { Router } from 'express';

import {
  getStudents, getOneStudent, updateOneStudent, deleteStudent,
} from '../middelwares/students';

import {
  checkEmail, checkFullName, validateInput,
} from '../middelwares/validateUserInput';

import { errorHandling } from '../middelwares/errorFunction';

const router = Router();

// 1 get all students
router.get('/', getStudents);

// 2 get one students
router.get('/:id', getOneStudent);

// 3 update one userData
router.patch('/', checkEmail, checkFullName, validateInput, errorHandling(updateOneStudent));

// 4 delete student
router.delete('/', deleteStudent);

export const studentRoute: Router = router;
