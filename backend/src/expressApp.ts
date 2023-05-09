import path from 'path';
import express, { Express } from 'express';

import { ErrorHandler } from './middleware';
import { mainInfoRoute, portfolioRoute, contactRoute } from './routes';
import { API_PATH, CONTACT_ROUTE, MAIN_INFO_ROUTE, PROJECTS_ROUTE } from './config';

export default async (app: Express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(path.join(__dirname, '..', 'public', 'images', 'user-info')));
  app.use(express.static(path.join(__dirname, '..', 'public', 'images', 'project')));

  app.use(`/${API_PATH}/${MAIN_INFO_ROUTE}`, mainInfoRoute);

  app.use(`/${API_PATH}/${PROJECTS_ROUTE}`, portfolioRoute);

  app.use(`/${API_PATH}/${CONTACT_ROUTE}`, contactRoute);
    
  app.use(ErrorHandler);
};
