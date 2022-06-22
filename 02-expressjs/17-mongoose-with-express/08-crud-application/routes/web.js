import express from "express";
import CollegeController from "../controllers/collegeControllers.js"

const router = express.Router();

router.get("/", CollegeController.getAllDoc);
router.post("/", CollegeController.createDoc);
router.get("/edit/:id", CollegeController.editDoc);
router.post("/update/:id", CollegeController.updateDocById);
router.post("/delete/:id", CollegeController.deleteDocById);


export default router;