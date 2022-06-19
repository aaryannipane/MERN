import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();


router.get("/getsessioninfo", StudentController.get_session_info);
router.get("/deletesession", StudentController.delete_session);
router.get("/regeneratesession", StudentController.regenerate_session);
router.get("/sessionexample", StudentController.session_example);
router.get("/getsessiondata", StudentController.get_session_data);


export default router

