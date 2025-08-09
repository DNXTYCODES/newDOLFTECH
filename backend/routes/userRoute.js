import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  forgotPassword,
  resetPassword,
  googleAuth,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/google-auth", googleAuth);

export default userRouter;

// import express from 'express';
// import { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

// const userRouter = express.Router();

// userRouter.post('/register',registerUser)
// userRouter.post('/login',loginUser)
// userRouter.post('/admin',adminLogin)

// export default userRouter;
