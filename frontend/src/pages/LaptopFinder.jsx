import React from "react";

const LaptopFinder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/20 dark:from-gray-900 dark:to-cyan-900/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="gamer-font text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Find Your Perfect <span className="text-cyan-500">Gaming Laptop</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Our AI-powered assistant will help you choose the ideal gaming laptop
          based on your needs, budget, and gaming preferences.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-cyan-500/20">
          <iframe
            src="https://udify.app/chatbot/gK3tFvSW9EqWfOID"
            className="w-full h-[500px] md:h-[600px] rounded-xl border-none"
            frameBorder="0"
            allow="microphone"
            loading="lazy"
            title="Dolftech LaptopFinder Chatbot"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              1. Tell Us Your Needs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              What games do you play? What's your budget? Any special
              requirements?
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              2. Get AI Recommendations
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI analyzes thousands of configurations to find your perfect
              match.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              3. Compare & Decide
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              See side-by-side comparisons and make an informed decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopFinder;
