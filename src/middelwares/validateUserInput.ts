import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// 1. vaildations
const checkEmail = body('email').isEmail().normalizeEmail().trim();

const checkPssword = body('password').isAlphanumeric().trim().isLength({ min: 8 });

const checkFullName = body('fullName').isLength({ min: 6 });
// 2. function that throw error when ther'd validation errors

function validateInput(req: Request, res: Response, next:NextFunction): void {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // throw new Error('Please enter a valid email!!');

    const errorParameter = errors.array()[0].param;

    if (errorParameter === 'email') {
      // error from express-validator
      throw new Error('email');
      // next('email'); // pass the error to the main error function in ./middelware/errorFunction
    } else if (errorParameter === 'password') {
      // error from express-validator
      next('password');
    } else if (errorParameter === 'fullName') {
      // error from express-validator
      next('fullName');
    }
  }
  next();
}

export {
  validateInput, checkEmail, checkPssword, checkFullName,
};
