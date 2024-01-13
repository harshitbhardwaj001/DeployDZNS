import multiparty from "multiparty";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "fs";
import mime from "mime-types";

const bucketName = "dzns-ecommerce";

const client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const uploadUserMiddleware = async (req, res, next) => {
  const form = new multiparty.Form();

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const links = await Promise.all(
      files.file.map(async (file) => {
        const ext = file.originalFilename.split(".").pop();
        const newFilename = Date.now() + "." + ext;

        await client.send(
          new PutObjectCommand({
            Bucket: bucketName,
            Key: newFilename,
            Body: fs.readFileSync(file.path),
            ACL: "public-read",
            ContentType: mime.lookup(file.path),
          })
        );

        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
        console.log(link);
        return link;
      })
    );

    req.s3Links = links; // Add the S3 links to the request object
    next();
  } catch (error) {
    console.error("Error uploading files to S3:", error);
    res.status(500).send("Internal Server Error.");
  }
};

export default uploadUserMiddleware;
