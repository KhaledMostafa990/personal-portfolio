import path from 'path';
import express, { Express } from 'express';

import { ErrorHandler } from './middleware';
import { mainInfoRoute, portfolioRoute, contactRoute } from './routes';

export default async (app: Express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(path.join(__dirname, '../public/images/user-info')));

  app.use('/api/v1/main-info', mainInfoRoute);

  app.use('/api/v1/portfolio', portfolioRoute);

  app.use('/api/v1/contact', contactRoute);
    
  app.use(ErrorHandler);
};
