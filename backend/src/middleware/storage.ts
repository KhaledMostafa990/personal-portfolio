import multer from 'multer';
import path from 'path';

const imageTypes = {
  png: 'png',
  jpg: 'jpg',
  svg: 'svg',
};

const avatarsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/user-info');
  },

  filename: (req, file, cb) => {
    const fileExtention = path.extname(file.originalname);
    cb(null, Date.now() + '_' + file.fieldname + fileExtention);
  },
});


export const uploadMainImages = multer({ storage: avatarsStorage });
