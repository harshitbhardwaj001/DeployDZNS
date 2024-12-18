import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  addServices,
  editService,
  getServiceData,
  getUserAuthServices,
  searchServices,
} from "../controllers/ServicesControllers.js";
import { Router } from "express";
import uploadUserMiddleware from "../middlewares/UploadUser.js";

export const servicesRoutes = Router();

// const upload = multer({ dest: "uploads/" });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

servicesRoutes.post("/add", verifyToken, upload.array("images"), addServices);
servicesRoutes.get("/get-user-services", verifyToken, getUserAuthServices);
servicesRoutes.get("/get-service-data/:serviceId", getServiceData);
servicesRoutes.put(
  "/edit-service/:serviceId",
  verifyToken,
  upload.single("image"),
  editService
);
servicesRoutes.get("/search-services", searchServices);
// servicesRoutes.get(
//   "/check-service-order/:serviceId",
//   verifyToken,
//   checkServiceOrder
// );
