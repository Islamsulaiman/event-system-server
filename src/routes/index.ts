import { Router } from 'express';

import { speakerRoute } from './speakers';
import { studentRoute } from './students';

import { mainLogin } from '../middelwares/login';

const router = Router();

// 1. login to all users route (/login)
router.use('/login', mainLogin);
// 2 registered students login route (/regestredstudents)

// 3 router.use(speaker route)
router.use('/speakers', speakerRoute);
// 4 router.use(student route)
router.use('/students', studentRoute);
// 5 router.use(event route)

export const indexRouter:Router = router;
