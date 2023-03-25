import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { login } from '../controllers/students';

dotenv.config();

const compareUserData = (userEmail, userPassword, DBUser) => {
  // check if email match
  if (userEmail !== DBUser.email) throw new Error('Entered data dosnt match!');
};

const mainLogin = async (req: Request, res: Response) => {
  const { email, password, userProfile } = req.body;

  if (userProfile === 'student') {
    const result = await login(email);

    if (result === null) {
      throw new Error('User Not found! check the entred data');
    }

    // compare user input data with db data
    compareUserData(email, password, result);

    console.log(result);
  }
  //  else if (userProfile === 'speaker') {

  // }
};

export { mainLogin };
