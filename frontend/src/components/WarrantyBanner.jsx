import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const WarrantyBanner = () => (
  <div className="w-full bg-gradient-to-r from-cyan-500 to-purple-700 py-4 flex items-center justify-center gap-4">
    <FaShieldAlt className="text-white text-2xl" />
    <span className="gamer-font text-white text-lg font-bold">
      Warranty Included On Every Laptop • Shop With Confidence!
    </span>
  </div>
);

export default WarrantyBanner;