import { Router } from 'express';

import {
  createStudent, getStudents, getOneStudent, updateOneStudent,
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
router.patch('/', updateOneStudent);

export const studentRoute: Router = router;
