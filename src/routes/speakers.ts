import { Router } from 'express';

import { createSpeaker } from '../middelwares/speakers';

import {
  checkEmail, checkPssword, checkFullName, validateInput,
} from '../middelwares/validateUserInput';

import { errorHandling } from '../middelwares/errorFunction';

const router = Router();

// 1 create new speaker

router.post('/', checkEmail, checkPssword, checkFullName, validateInput, errorHandling(createSpeaker));

export const speakerRoute: Router = router;
