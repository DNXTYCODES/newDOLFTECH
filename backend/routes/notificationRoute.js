import express from "express";
import {
  getNotifications,
  createNotification,
  updateNotification,
  deleteNotification
} from "../controllers/notificationController.js";
import adminAuth from "../middleware/adminAuth.js";

const notificationRouter = express.Router();

// Public: Get all notifications
notificationRouter.get("/", getNotifications);

// Admin: Create, update, delete notifications
notificationRouter.post("/", adminAuth, createNotification);
notificationRouter.put("/:id", adminAuth, updateNotification);
notificationRouter.delete("/:id", adminAuth, deleteNotification);

export default notificationRouter;
