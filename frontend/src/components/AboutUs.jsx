import React from "react";

const AboutUs = () => (
  <section className="py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="gamer-font text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        About Dolftech
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
        Dolftech is Nigeria’s trusted source for premium new and pre-owned UK/US gaming laptops. We’re passionate about bringing the best of global gaming tech to Lagos and beyond, with a focus on authenticity, warranty, and unbeatable value.
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
        <li>Direct imports from the UK & US</li>
        <li>All major brands: Alienware, Razer, ASUS ROG, MSI, Predator, Legion</li>
        <li>Every laptop is tested, verified, and covered by warranty</li>
        <li>Physical store: 3/9 Olu Koleosho Street, Ikeja, Lagos</li>
        <li>Follow us on Instagram: <a href="https://instagram.com/dolftech.ng" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-400 hover:underline">@dolftech.ng</a></li>
      </ul>
    </div>
  </section>
);

export default AboutUs;

















// import React from 'react';
// import { assets } from '../assets/assets';

// const AboutUs = () => {
//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-[2px] bg-purple-600"></div>
//               <p className="font-medium text-sm text-purple-600">
//                 OUR STORY
//               </p>
//             </div>
            
//             <h2 className="prata-regular text-4xl font-bold text-purple-900 dark:text-white mb-8">
//               Our Olfactory Legacy
//             </h2>
            
//             <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
//               Established in Ibadan in 1997, Scent Design NG has become West Africa's premier 
//               perfumery house. We combine centuries-old Nigerian botanical knowledge with 
//               cutting-edge fragrance technology to create scents that tell authentic African stories.
//             </p>
            
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { icon: "🌿", 
//                   title: "100+ Nigerian Ingredients", 
//                   text: "Sourced from local communities" },
//                 { icon: "🏆", 
//                   title: "15 International Awards", 
//                   text: "Global recognition for quality" },
//                 { icon: "👨‍🎨", 
//                   title: "500+ Trained Perfumers", 
//                   text: "Building African fragrance expertise" },
//                 { icon: "💰", 
//                   title: "₦2.8B Annual Turnover", 
//                   text: "Africa's fastest growing perfumery" }
//               ].map((item, index) => (
//                 <div key={index} className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl border border-purple-100">
//                   <div className="text-3xl mb-4">{item.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{item.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-100 dark:border-gray-700">
//             <img 
//               src={assets.ceowpeople2} 
//               alt="Nigerian perfumers at work" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
//             <div className="absolute bottom-0 left-0 right-0 bg-purple-900/80 text-white p-6 text-center">
//               <p className="prata-regular text-xl">Meet our master perfumers</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;