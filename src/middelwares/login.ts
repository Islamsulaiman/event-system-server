import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { login } from '../controllers/students';
import { compareUserData, generateJWT } from './authuntication';

dotenv.config();

const mainLogin = async (req: Request, res: Response) => {
  const { email, password, userProfile } = req.body;

  if (userProfile === 'student') {
    const userDataFromDB: any = await login(email);

    if (userDataFromDB === null) {
      throw new Error('User Not found! check your entred data');
    }

    // compare user input data with db data
    const compare = await compareUserData(email, password, userDataFromDB);
    if (!compare) throw new Error('Email or password dosnt match!, try again');
    else {
      // send user a token
      const token = generateJWT({ id: userDataFromDB.id });
      res.status(200).json({ 'user token': token });
    }
  }
  //  else if (userProfile === 'speaker') {

  // }
};

export { mainLogin };
