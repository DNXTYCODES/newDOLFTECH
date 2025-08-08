import Notification from "../models/notificationModel.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createNotification = async (req, res) => {
  try {
    const { message, type, isActive } = req.body;
    const notification = new Notification({ message, type, isActive });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, type, isActive } = req.body;
    const notification = await Notification.findByIdAndUpdate(
      id,
      { message, type, isActive },
      { new: true }
    );
    if (!notification)
      return res.status(404).json({ error: "Notification not found" });
    res.status(200).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification)
      return res.status(404).json({ error: "Notification not found" });
    res.status(200).json({ message: "Notification deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
