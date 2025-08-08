import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { Link } from 'react-router-dom';

const LatestCollection = () => {
  const { getAvailableProducts } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const availableProducts = await getAvailableProducts();
        const sortedProducts = [...availableProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestProducts(sortedProducts.slice(0, 9));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50/30 dark:from-gray-900 dark:to-cyan-900/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="gamer-font text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Latest Collection
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto">
          Discover the newest arrivals in premium gaming laptops. All models are UK/US spec and come with warranty.
        </p>
        {loading ? (
          <div className="flex justify-center items-center py-20 min-h-[300px]">
            <span className="text-cyan-500 text-xl font-bold animate-pulse">Loading latest laptops...</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {latestProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  basePrice={item.basePrice}
                  inStock={item.inStock}
                  warranty={item.warranty}
                  brand={item.brand}
                  condition={item.condition}
                  variations={item.variations}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block px-8 py-3 border-2 border-cyan-500 text-cyan-500 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View All Laptops
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestCollection;

























// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from 'react-router-dom';
// import DishLoader from "./DishLoader";

// const LatestCollection = () => {
//   const { getAvailableProducts } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const availableProducts = await getAvailableProducts();
//         // Sort by date (newest first) and take the first 10
//         const sortedProducts = [...availableProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
//         setLatestProducts(sortedProducts.slice(0, 10));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchProducts();
//   }, []);

//   return (
//     <div className="py-12 bg-amber-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="prata-regular text-4xl text-[#6d28d9] mb-4">
//             Our <span className="text-amber-600">Recent</span> Scents
//           </h2>
//           <div className="w-24 h-1 bg-[#6d28d9] mx-auto"></div>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Our recently Uploaded Scents - Catch up on the recent scents made available
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-20 min-h-[400px]">
//             <DishLoader size="lg" message="Preparing our popular scents..." />
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {latestProducts.map((item, index) => (
//                 <ProductItem
//                   key={index}
//                   id={item._id}
//                   image={item.image}
//                   name={item.name}
//                   basePrice={item.basePrice}
//                   inStock={item.inStock}
//                   variations={item.variations}  // Added variations prop
//                 />
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <Link 
//                 to="/menu" 
//                 className="inline-block px-8 py-3 border-2 border-[#6d28d9] text-[#6d28d9] rounded-lg font-medium hover:bg-[#6d28d9] hover:text-white transition-colors"
//               >
//                 View Full Collection
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;


















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from 'react-router-dom';
// import DishLoader from "./DishLoader";

// const LatestCollection = () => {
//   const { getAvailableProducts } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const availableProducts = await getAvailableProducts();
//         // Sort by date (newest first) and take the first 10
//         const sortedProducts = [...availableProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
//         setLatestProducts(sortedProducts.slice(0, 10));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchProducts();
//   }, []);

//   return (
//     <div className="py-12 bg-amber-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="prata-regular text-4xl text-[#6d28d9] mb-4">
//             Our <span className="text-amber-600">Popular</span> Dishes
//           </h2>
//           <div className="w-24 h-1 bg-[#6d28d9] mx-auto"></div>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Customer favorites - the most loved traditional dishes prepared with authentic recipes
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-20 min-h-[400px]">
//             <DishLoader size="lg" message="Preparing our popular dishes..." />
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {latestProducts.map((item, index) => (
//                 <ProductItem
//                   key={index}
//                   id={item._id}
//                   image={item.image}
//                   name={item.name}
//                   basePrice={item.basePrice}
//                   inStock={item.inStock}
//                   variations={item.variations}  // Added variations prop
//                 />
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <Link 
//                 to="/products" 
//                 className="inline-block px-8 py-3 border-2 border-[#6d28d9] text-[#6d28d9] rounded-lg font-medium hover:bg-[#6d28d9] hover:text-white transition-colors"
//               >
//                 View Full Products
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;


























// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import ProductItem from "./ProductItem";
// import { Link } from 'react-router-dom';
// import DishLoader from "./DishLoader";

// const LatestCollection = () => {
//   const { getAvailableProducts } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const availableProducts = await getAvailableProducts();
//         setLatestProducts(availableProducts.slice(0, 10));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchProducts();
//   }, []);

//   return (
//     <div className="py-12 bg-purple-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <div className="w-8 h-[2px] bg-purple-600"></div>
//             <p className="font-medium text-sm text-purple-600">
//               NEW ARRIVALS
//             </p>
//           </div>
//           <h2 className="prata-regular text-4xl text-purple-900 mb-4">
//             Our <span className="text-amber-600">Latest</span> Fragrances
//           </h2>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Discover our newest scent creations crafted with premium Nigerian botanicals
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <DishLoader size="lg" message="Loading our latest fragrances..." />
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {latestProducts.map((item, index) => (
//                 <ProductItem
//                   key={index}
//                   id={item._id}
//                   image={item.image}
//                   name={item.name}
//                   price={item.price}
//                 />
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <Link 
//                 to="/products" 
//                 className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
//               >
//                 View All Collections
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;





















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from 'react-router-dom';
// import DishLoader from "./DishLoader";

// const LatestCollection = () => {
//   const { getAvailableProducts } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const availableProducts = await getAvailableProducts();
//         setLatestProducts(availableProducts.slice(0, 10));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchProducts();
//   }, []);

//   return (
//     <div className="py-12 bg-amber-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="prata-regular text-4xl text-[#6d28d9] mb-4">
//             Our <span className="text-amber-600">Popular</span> Dishes
//           </h2>
//           <div className="w-24 h-1 bg-[#6d28d9] mx-auto"></div>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Customer favorites - the most loved traditional dishes prepared with authentic recipes
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <DishLoader size="lg" message="Preparing our popular dishes..." />
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {latestProducts.map((item, index) => (
//                 <ProductItem
//                   key={index}
//                   id={item._id}
//                   image={item.image}
//                   name={item.name}
//                   price={item.price}
//                 />
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <Link 
//                 to="/menu" 
//                 className="inline-block px-8 py-3 border-2 border-[#6d28d9] text-[#6d28d9] rounded-lg font-medium hover:bg-[#6d28d9] hover:text-white transition-colors"
//               >
//                 View Full Menu
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;






















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from 'react-router-dom';
// import DishLoader from "./DishLoader"; // Import the loader component

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     // Simulate loading delay (replace with actual API call)
//     const timer = setTimeout(() => {
//       setLatestProducts(products.slice(0, 10));
//       setLoading(false);
//     }, 1500);
    
//     return () => clearTimeout(timer);
//   }, [products]);

//   return (
//     <div className="py-12 bg-amber-50">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="prata-regular text-4xl text-[#6d28d9] mb-4">
//             Our <span className="text-amber-600">Popular</span> Dishes
//           </h2>
//           <div className="w-24 h-1 bg-[#6d28d9] mx-auto"></div>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Customer favorites - the most loved traditional dishes prepared with authentic recipes
//           </p>
//         </div>

//         {/* Products Grid with Loader */}
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <DishLoader size="lg" message="Preparing our popular dishes..." />
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {latestProducts.map((item, index) => (
//                 <ProductItem
//                   key={index}
//                   id={item._id}
//                   image={item.image}
//                   name={item.name}
//                   price={item.price}
//                 />
//               ))}
//             </div>

//             {/* View More Button */}
//             <div className="text-center mt-12">
//               <Link 
//                 to="/menu" 
//                 className="inline-block px-8 py-3 border-2 border-[#6d28d9] text-[#6d28d9] rounded-lg font-medium hover:bg-[#008753] hover:text-white transition-colors"
//               >
//                 View Full Menu
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;




















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import {Link} from 'react-router-dom'

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="py-12 bg-amber-50">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="prata-regular text-4xl text-[#008753] mb-4">
//             Our <span className="text-amber-600">Popular</span> Dishes
//           </h2>
//           <div className="w-24 h-1 bg-[#008753] mx-auto"></div>
//           <p className="mt-6 max-w-2xl mx-auto text-gray-700">
//             Customer favorites - the most loved traditional dishes prepared with authentic recipes
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {latestProducts.map((item, index) => (
//             <ProductItem
//               key={index}
//               id={item._id}
//               image={item.image}
//               name={item.name}
//               price={item.price}
//             />
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="text-center mt-12">
//           <Link 
//             to="/collection" 
//             className="inline-block px-8 py-3 border-2 border-[#008753] text-[#008753] rounded-lg font-medium hover:bg-[#008753] hover:text-white transition-colors"
//           >
//             View Full Menu
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;














// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-white">
//           {/* Discover our newest arrivals, where luxury meets precision. Our latest collection features exclusive timepieces that embody the perfect blend of craftsmanship. */}
//           Discover the latest luxury watch collections from Rolex, Patek
//           Philippe, Audemars Piguet, Omega, and more. Featuring cutting-edge
//           craftsmanship, exclusive designs, and timeless elegance, these new
//           arrivals redefine sophistication.{" "}
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;
