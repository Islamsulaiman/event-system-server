import { Request, Response } from 'express';
import { create } from '../controllers/events';

const createEvent = async (req: Request, res: Response) => {
  const { title, eventDate, mainSpeaker } = req.body;

  const event = await create({ title, eventDate, mainSpeaker });

  return res.status(200).json({ event });
};

export { createEvent };
