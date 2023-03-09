import express, { Express, Request, Response } from 'express';

import { ErrorHandler } from './middleware';
import { mainInfoRoute } from './routes';

export default async (app: Express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));
   
  app.use('/api/v1/main-info', mainInfoRoute);
  
  //  app.use('/', (req:Request,res:Response) => {
  //   res.send(`<h1>Minimalist Portfolio</h1>`);    
  // });

  app.use(ErrorHandler);
};
