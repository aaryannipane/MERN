import express from "express";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const router = express.Router();

// router level middleware - to protect route
router.use("/changepassword", checkUserAuth);
router.use("/loggeduserdata", checkUserAuth);

// public routes 
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.post("/reset-password-email", UserController.resetPasswordEmail);
router.post("/reset-password/:id/:token", UserController.userResetPassword);

// protected routes
// send header with this post request
router.post("/changepassword", UserController.changeUserPassword);
router.get("/loggeduserdata", UserController.loggedUserData);



export default router;