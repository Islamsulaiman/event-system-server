import { Router } from 'express';
import { createEvent } from '../middelwares/events';

const router = Router();

// 1 create new event
router.post('/', createEvent);

export const eventRoute: Router = router;
