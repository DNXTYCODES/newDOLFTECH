import React from "react";

const Profile = () => {
  // In a real app, fetch user info from context or API
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-700">My Profile</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <div className="mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Name:
          </span>{" "}
          <span className="text-gray-900 dark:text-white">(Your Name)</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Email:
          </span>{" "}
          <span className="text-gray-900 dark:text-white">
            (your@email.com)
          </span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Account Type:
          </span>{" "}
          <span className="text-gray-900 dark:text-white">Customer</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Joined:
          </span>{" "}
          <span className="text-gray-900 dark:text-white">(Date)</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button className="w-full py-3 rounded bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors">
          Edit Profile
        </button>
        <button className="w-full py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Change Password
        </button>
        <button className="w-full py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Manage Addresses
        </button>
        <button className="w-full py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Order History
        </button>
        <button className="w-full py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Wishlist
        </button>
        <button className="w-full py-3 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
