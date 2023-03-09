import { NextFunction, Request, Response } from 'express';

export function ErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  return res.status(500).send(err.message);
}
