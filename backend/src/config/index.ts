export * from './connectdb';
export * from './corsOptions';
export * from './helmetOptions';

export const PORT = process.env.PORT || 8000;

export const DB_CONNECTION = process.env.DB_CONNECTION_URI as string;

export const ENVIRONMENT = process.env.NODE_ENV;

export const BASE_URL = process.env.BASE_URL;

export const API_PATH = process.env.API_PATH;

export const MAIN_INFO_ROUTE = process.env.MAIN_INFO_ROUTE;

export const PROJECTS_ROUTE = process.env.PROJECTS_ROUTE;

export const CONTACT_ROUTE = process.env.CONTACT_ROUTE;
 
export const FRONTEND_URL = process.env.FRONTEND_URL;