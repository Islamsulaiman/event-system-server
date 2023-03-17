import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { create } from '../controllers/students';

dotenv.config();

const createStudent = async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  let { password } = req.body;
  console.log(process.env.SALT_ROUNDS);

  // eslint-disable-next-line max-len
  password = await bcrypt.hashSync(password, 10);

  console.log(`hashedPassword = ${password}`);
  await create({ fullName, password, email });

  return res.status(200).json('Student were created');
};

export { createStudent };
