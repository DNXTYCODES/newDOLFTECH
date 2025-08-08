import React, { useEffect } from "react";
import { useShopContext } from "../context/ShopContext.jsx";

const NotificationBar = () => {
  const { notifications, fetchNotifications } = useShopContext();

  useEffect(() => {
    fetchNotifications && fetchNotifications();
    // eslint-disable-next-line
  }, []);

  if (!notifications || !notifications.length) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[60] flex flex-col items-center pointer-events-none">
      {notifications.map((notif) => (
        <div
          key={notif._id}
          className={`pointer-events-auto px-6 py-3 m-2 rounded shadow-lg text-base font-medium flex items-center gap-2 animate-fade-in-down
            ${
              notif.type === "success"
                ? "bg-green-600 text-white"
                : notif.type === "warning"
                ? "bg-yellow-500 text-white"
                : notif.type === "error"
                ? "bg-red-600 text-white"
                : "bg-cyan-600 text-white"
            }
          `}
          style={{ minWidth: 300, maxWidth: 600 }}
        >
          <span className="truncate">{notif.message}</span>
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;
