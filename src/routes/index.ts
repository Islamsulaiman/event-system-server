import { Router } from 'express';

import { speakerRoute } from './speakers';
import { studentRoute } from './students';
import { eventRoute } from './events';

import { createStudent } from '../middelwares/students';

import {
  checkEmail, checkPssword, checkFullName, validateInput,
} from '../middelwares/validateUserInput';

import { mainLogin } from '../middelwares/login';

import { errorHandling } from '../middelwares/errorFunction';

const router = Router();

// 1. login to all users route (/login)
router.use('/login', errorHandling(mainLogin));
// 2 registered students login route (/regestredstudents)
router.post('/registerStudent', checkEmail, checkPssword, checkFullName, validateInput, errorHandling(createStudent));
// 3 router.use(speaker route)
router.use('/speakers', speakerRoute);
// 4 router.use(student route)
router.use('/students', studentRoute);
// 5 router.use(event route)
router.use('/events', eventRoute);

export const indexRouter:Router = router;
