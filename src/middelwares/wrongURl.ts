import { Request, Response, NextFunction } from 'express';

function wrongURl(req: Request, res: Response, next: NextFunction) {
  res.status(404).send('wrong route');
  next();
}

export default wrongURl;
