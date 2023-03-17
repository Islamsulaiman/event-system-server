import {
  Request, Response, NextFunction,
} from 'express';

const errorFunction = (err:Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === 'email') {
    res.status(400).json({ 'Error Massage': 'Please enter a vailid email ' });
  } else if (err.message.substring(0, 6) === 'E11000') {
    // error from mongo (duplicated email)
    res.status(400).json({ 'Error Massage': 'Duplicated email!' });
  } else if (err.message === 'password') {
    res.status(400).json({ 'Error Massage': 'Please enter a vailid password ' });
  } else if (err.message === 'fullName') {
    res.status(400).json({ 'Error Massage': 'Please enter a vailid Name ' });
  }

  // else if (err.message.substring(0, 6) === 'E11000') {
  //   console.log(err.message);
  // }
  // console.log(err.message.substring(0, 6));

  next();
};

const errorHandling = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// const errorHandling = (fn) => (req: Request, res: Response, next: NextFunction) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };

export { errorFunction, errorHandling };
