import { Router } from 'express';

import { createStudent } from '../middelwares/students';

import {
  checkEmail, checkPssword, checkFullName, validateInput,
} from '../middelwares/validateUserInput';

import { errorHandling } from '../middelwares/errorFunction';

const router = Router();

// 1 create new student

router.post('/', checkEmail, checkPssword, checkFullName, validateInput, errorHandling(createStudent));

export const studentRoute: Router = router;
