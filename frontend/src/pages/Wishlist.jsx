import React from "react";

const Wishlist = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-700">My Wishlist</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-700 dark:text-gray-200">
          You have no items in your wishlist yet.
        </p>
      </div>
    </div>
  );
};

export default Wishlist;
