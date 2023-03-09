export * from './connectdb';
export * from './corsOptions';

export const PORT = process.env.PORT || 3000;

export const DB_CONNECTION = process.env.DB_CONNECTION_URI as string;

export const ENVIRONMENT = process.env.NODE_ENV;

