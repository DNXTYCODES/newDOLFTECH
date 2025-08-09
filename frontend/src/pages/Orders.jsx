import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { assets } from "../assets/assets";
import DishLoader from "../components/DishLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { backendUrl, token, currency, products } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadOrderData = async () => {
    try {
      setLoading(true);
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrderData(response.data.orders.reverse());
      }
    } catch (error) {
      console.error("Error loading orders:", error);
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-500";
      case "shipped":
        return "bg-blue-500";
      case "processing":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Get product details from your products state
  const getProductDetails = (productId) => {
    return products.find((p) => p._id === productId) || {};
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <DishLoader size="lg" message="Loading your orders..." />
      </div>
    );
  }

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {orderData.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-cyan-100/40 dark:bg-cyan-900/30 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <img
              src={assets.order_icon}
              className="w-12 opacity-70"
              alt="No orders"
            />
          </div>
          <h3 className="prata-regular text-2xl text-cyan-700 dark:text-cyan-400 mb-2">
            No Orders Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
            You haven't placed any orders yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Browse Laptops
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {orderData.map((order) => (
            <div
              key={order._id}
              className="border rounded-xl p-4 md:p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b pb-3">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Order ID:{" "}
                    <span className="text-gray-500">{order._id.slice(-8)}</span>
                  </span>
                  <span className="text-xs text-gray-500">
                    Date: {new Date(order.date).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <span
                    className={`w-2 h-2 rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  ></span>
                  <span className="capitalize text-xs md:text-base font-semibold">
                    {order.status.toLowerCase()}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {order.items.map((item, index) => {
                  const product = getProductDetails(item.productId);
                  const variation = item.variation || item.variations || {};
                  const variationDesc = [
                    variation.ram ? `RAM: ${variation.ram}` : null,
                    variation.storage ? `Storage: ${variation.storage}` : null,
                    variation.cpu ? `CPU: ${variation.cpu}` : null,
                    variation.gpu ? `GPU: ${variation.gpu}` : null,
                  ]
                    .filter(Boolean)
                    .join(", ");
                  return (
                    <div
                      key={index}
                      className="py-3 flex flex-col sm:flex-row items-start gap-4 text-sm"
                    >
                      <img
                        className="w-16 sm:w-20 rounded-lg object-cover border"
                        src={product.image?.[0] || assets.placeholder}
                        alt={product.name || "Product"}
                      />
                      <div className="flex-1">
                        <p className="sm:text-base font-medium text-gray-800 dark:text-gray-100">
                          {product.name || "Product"}
                        </p>
                        {variationDesc && (
                          <p className="text-xs text-gray-500 mt-1">
                            {variationDesc}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-cyan-700 dark:text-cyan-300 font-semibold">
                            {currency}
                            {item.price.toFixed(2)}
                          </span>
                          <span className="text-gray-500">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Payment Method:{" "}
                    <span className="text-gray-500 capitalize">
                      {order.paymentMethod}
                    </span>
                  </span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Payment Status:
                    <span
                      className={`ml-2 font-bold ${
                        order.payment ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {order.payment ? "Paid" : "Pending"}
                    </span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Total: {currency}
                    {order.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={loadOrderData}
                    className="mt-2 border border-cyan-600 text-cyan-700 dark:text-cyan-300 px-4 py-1 text-sm font-medium rounded hover:bg-cyan-600 hover:text-white transition-colors"
                  >
                    Refresh Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import axios from 'axios';
// import { assets } from '../assets/assets';
// import DishLoader from '../components/DishLoader';

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadOrderData = async () => {
//     try {
//       setLoading(true);
//       if (!token) return;

//       const response = await axios.post(
//         backendUrl + '/api/order/userorders',
//         {},
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         let allOrdersItem = [];
//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             allOrdersItem.push({
//               ...item,
//               status: order.status,
//               payment: order.payment,
//               paymentMethod: order.paymentMethod,
//               date: order.date,
//               orderId: order._id
//             });
//           });
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {
//       console.error("Error loading orders:", error);
//       toast.error("Failed to load orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'delivered':
//         return 'bg-green-500';
//       case 'shipped':
//         return 'bg-blue-500';
//       case 'processing':
//         return 'bg-yellow-500';
//       case 'cancelled':
//         return 'bg-red-500';
//       default:
//         return 'bg-gray-500';
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center py-20">
//         <DishLoader size="lg" message="Loading your orders..." />
//       </div>
//     );
//   }

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'}/>
//       </div>

//       {orderData.length === 0 ? (
//         <div className="text-center py-12">
//           <div className="bg-[#6d28d9]/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
//             <img
//               src={assets.order_icon}
//               className="w-12 opacity-70"
//               alt="No orders"
//             />
//           </div>
//           <h3 className="prata-regular text-2xl text-[#6d28d9] mb-2">
//             No Orders Found
//           </h3>
//           <p className="text-gray-600 max-w-md mx-auto mb-6">
//             You haven't placed any orders yet.
//           </p>
//           <button
//             onClick={() => navigate('/menu')}
//             className="px-6 py-2 bg-[#6d28d9] text-white rounded-lg hover:bg-[#006641] transition-colors"
//           >
//             Browse Menu
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price}</p>
//                     <p>Quantity: {item.quantity}</p>
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toLocaleDateString()}</span></p>
//                   <p className='mt-1'>Order ID: <span className='text-gray-400'>{item.orderId.slice(-8)}</span></p>
//                 </div>
//               </div>
//               <div className='md:w-1/2 flex justify-between'>
//                 <div className='flex items-center gap-2'>
//                   <span className={`min-w-2 h-2 rounded-full ${getStatusColor(item.status)}`}></span>
//                   <p className='text-sm md:text-base capitalize'>{item.status.toLowerCase()}</p>
//                 </div>
//                 <button
//                   onClick={() => loadOrderData()}
//                   className='border border-[#6d28d9] text-[#6d28d9] px-4 py-2 text-sm font-medium rounded hover:bg-[#6d28d9] hover:text-white transition-colors'
//                 >
//                   Refresh Status
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import axios from 'axios';

// const Orders = () => {

//   const { backendUrl, token , currency} = useContext(ShopContext);

//   const [orderData,setorderData] = useState([])

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
//       if (response.data.success) {
//         let allOrdersItem = []
//         response.data.orders.map((order)=>{
//           order.items.map((item)=>{
//             item['status'] = order.status
//             item['payment'] = order.payment
//             item['paymentMethod'] = order.paymentMethod
//             item['date'] = order.date
//             allOrdersItem.push(item)
//           })
//         })
//         setorderData(allOrdersItem.reverse())
//       }

//     } catch (error) {

//     }
//   }

//   useEffect(()=>{
//     loadOrderData()
//   },[token])

//   return (
//     <div className='border-t pt-16'>

//         <div className='text-2xl'>
//             <Title text1={'MY'} text2={'ORDERS'}/>
//         </div>

//         <div>
//             {
//               orderData.map((item,index) => (
//                 <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                     <div className='flex items-start gap-6 text-sm'>
//                         <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                         <div>
//                           <p className='sm:text-base font-medium'>{item.name}</p>
//                           <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                             <p>{currency}{item.price}</p>
//                             <p>Quantity: {item.quantity}</p>
//                             <p>Size: {item.size}</p>
//                           </div>
//                           <p className='mt-1'>Date: <span className=' text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                           <p className='mt-1'>Payment: <span className=' text-gray-400'>{item.paymentMethod}</span></p>
//                         </div>
//                     </div>
//                     <div className='md:w-1/2 flex justify-between'>
//                         <div className='flex items-center gap-2'>
//                             <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                             <p className='text-sm md:text-base'>{item.status}</p>
//                         </div>
//                         <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
//                     </div>
//                 </div>
//               ))
//             }
//         </div>
//     </div>
//   )
// }

// export default Orders
