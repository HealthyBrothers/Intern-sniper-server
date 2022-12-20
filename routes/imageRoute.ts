import express from 'express';
import mongoose from 'mongoose';
import { upload } from '../middleware/upload';
import * as imageController from '../controllers/imageController';

const router = express.Router();
let gfs: any;
const conn = mongoose.connection;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'photos',
  });
});

router.post('/upload', upload.single('file'), imageController.uploadImage);

router.get('/:filename', imageController.getImage);

export default router;
