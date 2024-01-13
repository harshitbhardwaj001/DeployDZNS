import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const bucketName = "dzns-ecommerce";

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadUser = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    acl: "public-read", // Adjust permissions as needed
    key: function (req, file, cb) {
      // Generate a custom filename, for example using a timestamp and the original filename
      const timestamp = Date.now();
      const customFilename = `${timestamp}_${file.originalname}`;
      cb(null, customFilename);
    },
  }),
});

export const uploadUserMiddleware = (fieldName) => (req, res, next) => {
  uploadUser.single(fieldName)(req, res, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Failed to upload image to S3", link: null });
    }

    // Assuming req.file.location contains the S3 URL after the upload
    const link = `https://${bucketName}.s3.amazonaws.com/${req.file.key}`;

    // Attach the S3 link to the request for use in the controller
    req.s3Link = link;

    next();
  });
};

export default uploadUser;
