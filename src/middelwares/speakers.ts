import { Request, Response } from 'express';
import { create } from '../controllers/speakers';

const createSpeaker = async (req: Request, res: Response) => {
  const { fullName, password, email } = req.body;

  await create({ fullName, password, email });

  return res.status(200).json('speaker were created');
};

export { createSpeaker };
