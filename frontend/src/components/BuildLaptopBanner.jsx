import React from "react";
import { Link } from "react-router-dom";

const BuildLaptopBanner = () => (
  <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-cyan-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-cyan-100 dark:border-cyan-900">
    <div className="max-w-2xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Build Your Dream Laptop
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Use our website assistant to specify your ideal laptop
        configuration—choose your preferred processor, RAM, storage, graphics,
        and more. Get instant, expert recommendations for the best laptops that
        match your needs and budget.
      </p>
      <ul className="text-left text-base text-gray-700 dark:text-gray-300 mb-6 mx-auto max-w-lg list-disc list-inside">
        <li>
          Get laptop recommendations based on the programs you want to run
          (e.g., gaming, design, programming, business, school, engineering,
          content creation, etc.)
        </li>
        <li>Find the best laptop for your specific purpose or profession</li>
        <li>Compare different laptop models and configurations</li>
        <li>
          Get advice on the right processor, RAM, storage, graphics, and battery
          life for your needs
        </li>
        <li>See options that fit your budget and performance requirements</li>
        <li>
          Ask questions and get instant, expert answers from the Dolftech
          Assistant
        </li>
        <li>Get help with Windows vs Mac, portability, durability, and more</li>
      </ul>
      <Link
        to="/laptop-finder"
        className="inline-block px-8 py-3 rounded-lg bg-cyan-600 text-white font-semibold text-lg shadow hover:bg-cyan-700 transition-colors"
      >
        Start Building &rarr;
      </Link>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Not sure what you need? Our assistant will guide you every step of the
        way.
      </p>
    </div>
  </section>
);

export default BuildLaptopBanner;
