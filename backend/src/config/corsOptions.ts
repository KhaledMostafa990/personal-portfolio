import { CorsOptions } from 'cors';
import { FRONTEND_URL } from '.';



const allowedOrigins:string[] = [];


export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    allowedOrigins.push(FRONTEND_URL|| 'http://localhost:3000');
    
    if (allowedOrigins.indexOf(`${origin}`) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Sorry origin not allowed by CORS'), false);
    }
  },
  optionsSuccessStatus: 200,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: process.env.NODE_ENV === 'production' ? true : false,
};
