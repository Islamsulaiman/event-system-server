import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import {
  create, getAll, getOne, updateOne,
} from '../controllers/students';

dotenv.config();

const createStudent = async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  let { password } = req.body;

  // eslint-disable-next-line max-len
  password = await bcrypt.hashSync(password, 10);

  const student = await create({ fullName, password, email });

  return res.status(200).json(student);
};

const getStudents = async (req: Request, res: Response) => {
  const student = await getAll();

  return res.status(200).json(student);
};

const getOneStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  const oneStudent = await getOne(id);

  return res.status(200).json(oneStudent);
};

type UpdateStudent = {
  email? : string,
  fullName?: string
};

const updateOneStudent = async (req: Request, res: Response) => {
  console.log('no start');
  const updateObject: UpdateStudent = {};

  if (!req.body.email) {
    throw new Error('Enter email to update');
  }
  console.log('no 0');
  const { email } = req.body;

  console.log('no 1');
  if (req.body.fullName) {
    updateObject.fullName = req.body.fullName;
  }
  console.log('no 2');

  if (Object.keys(updateObject).length === 0) {
    throw new Error('Please enter data to update!');
  }

  const student = await updateOne(email, updateObject);

  return res.status(200).json(student);
};

export {
  createStudent, getStudents, getOneStudent, updateOneStudent,
};
