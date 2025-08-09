import React from "react";

const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-700">
        Account Settings
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Update your account details, change your password, and manage your
          preferences here.
        </p>
        <button
          className="w-full py-3 rounded bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors mb-4"
          onClick={() => (window.location.href = "/forgot-password")}
        >
          Change Password
        </button>
        <button className="w-full py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Settings;
