import { CorsOptions } from 'cors';
import { FRONTEND_URL } from '.';



export const allowedOrigins = [FRONTEND_URL || 'http://localhost:3000'];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(`${origin}`) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Sorry origin not allowed by CORS'), false);
    }
  },
  optionsSuccessStatus: 200,
  // credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
};
