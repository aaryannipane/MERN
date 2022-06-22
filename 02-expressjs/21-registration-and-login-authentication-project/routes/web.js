import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.home);
router.get("/registration", UserController.registration);
router.post("/registration", UserController.createUserDoc);
router.get("/login", UserController.login);
router.post("/login", UserController.verifyLogin);

export default router;