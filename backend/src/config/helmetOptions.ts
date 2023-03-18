import helmet from "helmet";
import { FRONTEND_URL } from ".";

export const helmetOptions = {
    contentSecurityPolicy: {
      directives: {
        connectSrc: ["'self'", FRONTEND_URL || 'http://localhost:4000'],
        workerSrc: ["'self'", 'blob:'],            
        reportUri: '/csp-violation-report',
        ...helmet.contentSecurityPolicy.getDefaultDirectives()
      }
    },    
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },    
};