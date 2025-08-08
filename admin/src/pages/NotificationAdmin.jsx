import React, { useState, useEffect } from "react";
import axios from "axios";

const NotificationAdmin = () => {
  const [notifications, setNotifications] = useState([]);
  const [form, setForm] = useState({
    message: "",
    type: "info",
    isActive: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("/api/notification");
      setNotifications(res.data);
    } catch (err) {
      setError("Failed to fetch notifications");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (editingId) {
        await axios.put(`/api/notification/${editingId}`, form);
      } else {
        await axios.post("/api/notification", form);
      }
      setForm({ message: "", type: "info", isActive: true });
      setEditingId(null);
      fetchNotifications();
    } catch (err) {
      setError("Failed to save notification");
    }
    setLoading(false);
  };

  const handleEdit = (notif) => {
    setForm({
      message: notif.message,
      type: notif.type,
      isActive: notif.isActive,
    });
    setEditingId(notif._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notification?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`/api/notification/${id}`);
      fetchNotifications();
    } catch (err) {
      setError("Failed to delete notification");
    }
    setLoading(false);
  };

  // Defensive: ensure notifications is always an array
  const safeNotifications = Array.isArray(notifications) ? notifications : [];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow dark:bg-gray-900 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-600">
        Manage Notifications
      </h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Message</label>
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
          >
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
            id="isActive"
            className="mr-2"
          />
          <label htmlFor="isActive">Active</label>
        </div>
        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 disabled:opacity-60"
          disabled={loading}
        >
          {editingId ? "Update" : "Add"} Notification
        </button>
        {editingId && (
          <button
            type="button"
            className="ml-4 text-gray-500 underline"
            onClick={() => {
              setEditingId(null);
              setForm({ message: "", type: "info", isActive: true });
            }}
          >
            Cancel
          </button>
        )}
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div>
        <h3 className="font-semibold mb-2">Current Notifications</h3>
        <ul className="space-y-2">
          {safeNotifications.map((notif) => (
            <li
              key={notif._id}
              className={`p-3 rounded border flex items-center justify-between ${
                notif.isActive
                  ? notif.type === "success"
                    ? "bg-green-50 border-green-200"
                    : notif.type === "warning"
                    ? "bg-yellow-50 border-yellow-200"
                    : notif.type === "error"
                    ? "bg-red-50 border-red-200"
                    : "bg-cyan-50 border-cyan-200"
                  : "bg-gray-100 border-gray-200 opacity-60"
              }`}
            >
              <div>
                <span className="font-medium">[{notif.type}]</span>{" "}
                {notif.message}
                {!notif.isActive && (
                  <span className="ml-2 text-xs text-gray-400">(Inactive)</span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  className="text-cyan-600 hover:underline"
                  onClick={() => handleEdit(notif)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(notif._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationAdmin;
