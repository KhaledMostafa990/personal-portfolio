import multer from 'multer';
import path from 'path';

const avatarsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/user-info');
  },

  filename: (req, file, cb) => {    
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const projectStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/project');
  },

  filename: (req, file, cb) => {    
    cb(null, Date.now() + '_' + file.originalname);
  },
});


export const uploadProjectImages = multer({ storage: projectStorage });
export const uploadMainImages = multer({ storage: avatarsStorage });
