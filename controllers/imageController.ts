import { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

let gfs: any;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
});

export async function uploadImage(req: Request, res: Response) {
  try {
    if (req.file === undefined) return res.json({
      success: false,
      message: "you must select a file."
    });
    const imgUrl = `${req.file.filename}`;

    return res.json({
      success: true,
      path: imgUrl
    });
  } catch (err) {
    console.error(err);
    res.status(403);
  }
}

export async function getImage(req: Request, res: Response) {
  try {
    gfs
      .find({ filename: req.params.filename })
      .toArray((err: any, files: any) => {
        if (!files[0] || files.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No files available",
          });
        }
        if (
          files[0].contentType === "image/jpeg" ||
          files[0].contentType === "image/png" ||
          files[0].contentType === "image/svg+xml"
        ) {
          gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        } else {
          res.status(404).json({
            err: "Not an image",
          });
        }
      });
  } catch (err) {
    console.log(err);
    res.send("not found");
  }
}
