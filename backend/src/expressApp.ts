import express, { Express, Request, Response } from 'express';

import { ErrorHandler } from './middleware';

export default async (app: Express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));
  
  app.use('/', (req:Request,res:Response) => {
    res.send(`<h1>Minimalist Portfolio</h1>`);    
  });
  
  app.use(ErrorHandler);
};
