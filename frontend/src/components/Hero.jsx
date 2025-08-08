import { FaQuoteLeft, FaStar, FaWhatsapp, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Chidi M.",
      rating: 5,
      content: "Got a Razer Blade from Dolftech that outperforms brand new units. Warranty gave me peace of mind!",
      location: "Lagos"
    },
    {
      id: 2,
      name: "Temi A.",
      rating: 5,
      content: "Authentic UK-spec Alienware at 40% less than new. These guys are the real deal for gamers in Naija!",
      location: "Abuja"
    },
    {
      id: 3,
      name: "Emeka C.",
      rating: 4,
      content: "My ASUS ROG arrived in perfect condition. Battery health was exactly as advertised. Will buy again!",
      location: "Port Harcourt"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-cyan-50/30 dark:from-gray-900 dark:to-cyan-900/10">
      {/* Animated RGB Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-700 to-red-500 opacity-10 dark:opacity-[0.15] animate-rgb-cycle"></div>
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[url('https://res.cloudinary.com/dolftechn/image/upload/v1716379241/circuit-board_ndlqor.svg')] bg-cover"></div>
      {/* Floating Laptop Elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 transform rotate-12 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-8 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600/20 to-red-500/20 border border-purple-600/30 transform -rotate-6 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 left-1/4 w-20 h-20 rounded-lg bg-gradient-to-br from-red-500/20 to-cyan-500/20 border border-red-500/30 transform rotate-45 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-purple-700/10 border border-purple-700/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-700 dark:text-purple-400 font-medium">
                HOME OF GAMERS
              </span>
            </motion.div>
            <motion.h1 
              className="gamer-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block text-gray-900 dark:text-white">Premium Gaming</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 neon-glow">
                Laptops in Nigeria
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              New & pre-owned UK/US gaming laptops with warranty. Experience unmatched performance with Alienware, Razer, ASUS ROG and MSI.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center neon-border"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Explore Laptops</span>
                {isHovered && (
                  <span className="ml-2 h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
                )}
              </a>
              <a 
                href="https://wa.me/2348118532900" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700"
              >
                <FaWhatsapp className="text-green-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
            {/* Business Info Bar */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <span>
                <strong>Address:</strong> 3/9 Olu Koleosho Street, Ikeja, Lagos
              </span>
              <span className="hidden sm:inline">|</span>
              <span>
                <strong>Owner:</strong> <a href="https://instagram.com/fabianoflagos" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-400 hover:underline">@fabianoflagos</a>
              </span>
            </motion.div>
            <motion.div 
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <FaShieldAlt className="h-6 w-6 text-cyan-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Warranty Included</h4>
                  <p className="text-gray-600 dark:text-gray-400">On all purchases</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/10 border border-purple-700/20">
                    <FaGlobeAmericas className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">UK/US Models</h4>
                  <p className="text-gray-600 dark:text-gray-400">Direct imports</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Column - Testimonials */}
          <motion.div 
            className="bg-gray-900/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-6">
              <h2 className="gamer-font text-2xl font-bold text-cyan-400 mb-2">Gamer Approved</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className={`absolute inset-0 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-500 ease-in-out transform ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentTestimonial ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft className="text-purple-600 text-3xl mb-4 opacity-70" />
                  <p className="text-gray-300 italic mb-4">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${
                            i < testimonial.rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial 
                      ? 'bg-cyan-500' 
                      : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gray-700 rounded-lg">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-red-500 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-cyan-500 border-2 border-gray-800"></div>
                </div>
                <span className="ml-3 text-gray-300">
                  <span className="font-bold">2000+</span> gamers served
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;






















// // import React, { useState, useEffect } from 'react';
// import { FaQuoteLeft, FaStar, FaWhatsapp, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useState, useEffect, useContext } from 'react';

// const Hero = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Chidi M.",
//       rating: 5,
//       content: "Got a Razer Blade from Dolftech that outperforms brand new units. Warranty gave me peace of mind!",
//       location: "Lagos"
//     },
//     {
//       id: 2,
//       name: "Temi A.",
//       rating: 5,
//       content: "Authentic UK-spec Alienware at 40% less than new. These guys are the real deal for gamers in Naija!",
//       location: "Abuja"
//     },
//     {
//       id: 3,
//       name: "Emeka C.",
//       rating: 4,
//       content: "My ASUS ROG arrived in perfect condition. Battery health was exactly as advertised. Will buy again!",
//       location: "Port Harcourt"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-cyan-50/30 dark:from-gray-900 dark:to-cyan-900/10">
//       {/* Animated RGB Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-700 to-red-500 opacity-10 dark:opacity-[0.15] animate-rgb-cycle"></div>
      
//       {/* Circuit Board Pattern */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[url('https://res.cloudinary.com/dolftechn/image/upload/v1716379241/circuit-board_ndlqor.svg')] bg-cover"></div>
      
//       {/* Floating Laptop Elements */}
//       <motion.div 
//         className="absolute top-1/4 right-10 w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 transform rotate-12 hidden lg:block"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>
//       <motion.div 
//         className="absolute bottom-1/3 left-8 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600/20 to-red-500/20 border border-purple-600/30 transform -rotate-6 hidden lg:block"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//       ></motion.div>
//       <motion.div 
//         className="absolute top-1/3 left-1/4 w-20 h-20 rounded-lg bg-gradient-to-br from-red-500/20 to-cyan-500/20 border border-red-500/30 transform rotate-45 hidden lg:block"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//       ></motion.div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Content */}
//           <motion.div 
//             className="text-center lg:text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.div 
//               className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-purple-700/10 border border-purple-700/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
//               <span className="text-purple-700 dark:text-purple-400 font-medium">
//                 HOME OF GAMERS
//               </span>
//             </motion.div>
            
//             <motion.h1 
//               className="gamer-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <span className="block text-gray-900 dark:text-white">Premium Gaming</span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 neon-glow">
//                 Laptops in Nigeria
//               </span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               New & pre-owned UK/US gaming laptops with warranty. Experience unmatched performance with Alienware, Razer, ASUS ROG and MSI.
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               <a 
//                 href="#products"
//                 className="px-8 py-4 bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center neon-border"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <span>Explore Laptops</span>
//                 {isHovered && (
//                   <span className="ml-2 h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
//                 )}
//               </a>
              
//               <a 
//                 href="https://wa.me/2348118532900" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700"
//               >
//                 <FaWhatsapp className="text-green-400" />
//                 <span>Chat on WhatsApp</span>
//               </a>
//             </motion.div>
            
//             <motion.div 
//               className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//             >
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20">
//                     <FaShieldAlt className="h-6 w-6 text-cyan-500" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="text-lg font-bold text-gray-900 dark:text-white">Warranty Included</h4>
//                   <p className="text-gray-600 dark:text-gray-400">On all purchases</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/10 border border-purple-700/20">
//                     <FaGlobeAmericas className="h-6 w-6 text-purple-600" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="text-lg font-bold text-gray-900 dark:text-white">UK/US Models</h4>
//                   <p className="text-gray-600 dark:text-gray-400">Direct imports</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           {/* Right Column - Testimonials */}
//           <motion.div 
//             className="bg-gray-900/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30 shadow-xl"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <div className="text-center mb-6">
//               <h2 className="gamer-font text-2xl font-bold text-cyan-400 mb-2">Gamer Approved</h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
//             </div>
            
//             <div className="relative h-64">
//               {testimonials.map((testimonial, index) => (
//                 <motion.div 
//                   key={testimonial.id}
//                   className={`absolute inset-0 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-500 ease-in-out transform ${
//                     index === currentTestimonial 
//                       ? 'opacity-100 translate-y-0' 
//                       : 'opacity-0 translate-y-4'
//                   }`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: index === currentTestimonial ? 1 : 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <FaQuoteLeft className="text-purple-600 text-3xl mb-4 opacity-70" />
//                   <p className="text-gray-300 italic mb-4">{testimonial.content}</p>
                  
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-bold text-white">{testimonial.name}</h4>
//                       <p className="text-gray-400 text-sm">{testimonial.location}</p>
//                     </div>
                    
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar 
//                           key={i} 
//                           className={`${
//                             i < testimonial.rating 
//                               ? 'text-yellow-400' 
//                               : 'text-gray-600'
//                           }`} 
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <div className="flex justify-center mt-6 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     index === currentTestimonial 
//                       ? 'bg-cyan-500' 
//                       : 'bg-gray-700'
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <div className="mt-8 text-center">
//               <div className="inline-flex items-center px-4 py-2 bg-gray-700 rounded-lg">
//                 <div className="flex -space-x-2">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 border-2 border-gray-800"></div>
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-red-500 border-2 border-gray-800"></div>
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-cyan-500 border-2 border-gray-800"></div>
//                 </div>
//                 <span className="ml-3 text-gray-300">
//                   <span className="font-bold">2000+</span> gamers served
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Gaming Brand Logos */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 opacity-80 dark:opacity-60">
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/alienware-logo_uwbqnx.svg" 
//               alt="Alienware" 
//               className="h-10 dark:invert"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/razer-logo_zrsb0r.svg" 
//               alt="Razer" 
//               className="h-8 dark:invert"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/rog-logo_tykqo5.svg" 
//               alt="ASUS ROG" 
//               className="h-10 dark:invert"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/msi-logo_zzb7jq.svg" 
//               alt="MSI" 
//               className="h-8 dark:invert"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/predator-logo_ivk5nl.svg" 
//               alt="Acer Predator" 
//               className="h-8 dark:invert"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <img 
//               src="https://res.cloudinary.com/dolftechn/image/upload/v1716379241/legion-logo_d0wqpk.svg" 
//               alt="Lenovo Legion" 
//               className="h-8 dark:invert"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;























// import React, { useState, useEffect } from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const slides = [
//     { type: "image", src: assets.ceowpeople, caption: "Nigerian Craftsmanship" },
//     { type: "image", src: assets.carouselmodel1, caption: "Premium Fragrances" },
//     { type: "image", src: assets.ngn, caption: "Scent Design Expertise" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="bg-purple-gradient rounded-3xl overflow-hidden">
//       <div className="flex flex-col md:flex-row">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
//           <div className="text-center md:text-left max-w-md">
//             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
//               <div className="w-8 h-[2px] bg-purple-primary"></div>
//               <p className="font-medium text-sm text-purple-primary">
//                 AUTHENTIC PERFUME FRAGRANCES
//               </p>
//             </div>

//             <h1 className="prata-regular text-4xl md:text-5xl lg:text-6xl text-purple-primary mb-4 leading-tight">
//               Fragrance Is <span className="text-gold-500">Our Passion</span>!
//             </h1>

//             <p className="text-gray-700 mb-8 text-lg">
//               Scent Design Nigeria, where fragrance is our passion. Experience the rich olfactory heritage of Africa.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link
//                 to="/products"
//                 className="px-8 py-3 bg-purple-primary text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
//               >
//                 <button>Explore Our Perfumes</button>
//               </Link>
//               <a
//                 href="https://wa.me/+2348028293058"
//                 className="px-8 py-3 border-2 border-purple-primary text-purple-primary rounded-lg font-medium hover:bg-purple-50 transition-colors"
//               >
//                 <button>Make Inquiries</button>
//               </a>
//             </div>

//             <div className="mt-10 flex justify-center md:justify-start">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-purple-primary"></div>
//                   <p className="text-sm">Premium Ingredients</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-purple-primary"></div>
//                   <p className="text-sm">Long Lasting Scents</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Slideshow */}
//         <div className="w-full md:w-1/2 h-[500px] relative">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <div className="relative h-full w-full">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={slide.src}
//                   alt="Scent Design Perfumes"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//                   <p className="prata-regular text-white text-2xl text-center">
//                     {slide.caption}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Slide Indicators */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-purple-primary" : "bg-white/50"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;