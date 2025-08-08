import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedLaptops = () => {
  const laptops = [
    {
      id: 1,
      name: "Razer Blade 15",
      specs: "i7-12800H, RTX 3070 Ti, 16GB RAM, 1TB SSD",
      price: "₦850,000",
      condition: "Pre-owned (UK)",
      image: "razer-blade"
    },
    {
      id: 2,
      name: "Alienware m15 R7",
      specs: "i9-12900H, RTX 3080, 32GB RAM, 2TB SSD",
      price: "₦1,250,000",
      condition: "New (US)",
      image: "alienware-m15"
    },
    {
      id: 3,
      name: "ASUS ROG Zephyrus",
      specs: "Ryzen 9 6900HS, RTX 3060, 16GB RAM, 1TB SSD",
      price: "₦720,000",
      condition: "Pre-owned (UK)",
      image: "rog-zephyrus"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gamer-font text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-cyan-500">Gaming Laptops</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Hand-picked premium gaming machines with our quality guarantee
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {laptops.map((laptop) => (
            <div 
              key={laptop.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-2"
            >
              <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-600">
                <div className="bg-white dark:bg-gray-800 p-4">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-4xl">💻</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Laptop Image</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{laptop.name}</h3>
                    <span className="px-2 py-1 text-xs bg-cyan-500 text-white rounded-full">
                      {laptop.condition}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{laptop.specs}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">{laptop.price}</span>
                    <Link 
                      to={`/product/${laptop.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-bold rounded-lg hover:shadow-md transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl inline-flex items-center transition-all"
          >
            <span>View All Gaming Laptops</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLaptops;