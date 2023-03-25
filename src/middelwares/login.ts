import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const login = async (req: Request, res: Response) => {
  const { email, password, userProfile } = req.body;

  if (userProfile === 'student') {

  } else if (userProfile === 'speaker') {

  }
};

export { login };
