import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NMAE,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'ecommerce-website',
    allowedFormats: ['jpeg', 'png', 'jpg'],
    transformation: [{ width: 540, height: 560, crop: 'mfit' }]
  }
});

export { cloudinary, storage };