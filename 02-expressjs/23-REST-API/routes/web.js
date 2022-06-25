import express from "express";
import StudentController from "../controllers/studentController.js";


const router = express.Router();

router.post("/createDoc", StudentController.createDoc);
router.get("/", StudentController.getAllDoc);
router.get("/getSingleDoc/:id", StudentController.getSingleDocById);
router.put("/updateDoc/:id", StudentController.updateDoc);
router.post("/deleteDoc/:id", StudentController.deleteDoc);

// Form-encode
router.post("/form", StudentController.getForm);


export default router;