import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router()

router.get("/setCookie", StudentController.set_cookie);
router.get("/getCookie", StudentController.get_cookie);
router.get("/deleteCookie", StudentController.delete_cookie);



export default router;
