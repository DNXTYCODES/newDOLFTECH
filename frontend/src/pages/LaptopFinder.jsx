import React from 'react';

const LaptopFinder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/20 dark:from-gray-900 dark:to-cyan-900/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="gamer-font text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Find Your Perfect <span className="text-cyan-500">Gaming Laptop</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Our AI-powered assistant will help you choose the ideal gaming laptop based on your needs, budget, and gaming preferences.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-cyan-500/20">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Dify AI Chatbot Integration Coming Soon
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">1. Tell Us Your Needs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                What games do you play? What's your budget? Any special requirements?
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">2. Get AI Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI analyzes thousands of configurations to find your perfect match.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">3. Compare & Decide</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See side-by-side comparisons and make an informed decision.
              </p>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href="https://wa.me/2348118532900" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <span>Chat with Us on WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/>
                <path d="M12.03 7.89c-2.33 0-3.79 1.6-3.79 3.76 0 1.02.5 2.02 1.33 2.61.2.14.32.36.32.6 0 .2-.06.4-.17.56-.15.23-.44.47-.73.66-.21.14-.42.27-.61.41-.19.14-.37.31-.51.5-.14.19-.25.45-.1.76.15.31.67 1.34 2.38 1.28 1.71-.06 2.83-1.1 3.18-1.2.35-.1.65.03.82.25.17.22.73.97 1.25 1.18.52.21.85.1 1.15-.1.3-.2 1.3-1.24 1.66-1.68.36-.44.6-.74.67-1.05.07-.31-.07-.6-.31-.84-.24-.24-.65-.42-1.16-.7-.51-.28-3.06-1.51-3.54-1.69-.48-.18-.83-.27-1.18.28-.35.55-1.37 1.69-1.68 1.82-.31.13-.62.09-.86-.04-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.09-.16.05-.3-.02-.42-.07-.12-.65-1.57-.89-2.15-.24-.58-.49-.5-.65-.51-.17-.01-.36-.01-.56-.01z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopFinder;