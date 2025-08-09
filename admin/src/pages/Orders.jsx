import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div className="pt-8 px-2 md:px-8">
      <h3 className="text-2xl font-bold text-cyan-700 mb-6">All Orders</h3>
      <div className="space-y-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-cyan-100/40 dark:bg-cyan-900/30 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <img src={assets.parcel_icon} className="w-12 opacity-70" alt="No orders" />
            </div>
            <h3 className="text-2xl text-cyan-700 mb-2">No Orders Found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">No orders have been placed yet.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              className="border rounded-xl p-4 md:p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center"
              key={index}
            >
              <img className="w-14 h-14 object-contain rounded bg-cyan-50 border" src={assets.parcel_icon} alt="" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b pb-2 mb-2">
                  <div className="font-semibold text-gray-800 dark:text-gray-100 text-sm md:text-base">
                    Order ID: <span className="text-gray-500">{order._id.slice(-8)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' : order.status === 'Shipped' ? 'bg-blue-500' : order.status === 'Packing' ? 'bg-yellow-500' : order.status === 'Out for delivery' ? 'bg-orange-500' : 'bg-gray-400'}`}></span>
                    <span className="capitalize text-xs md:text-base font-semibold">{order.status}</span>
                  </div>
                  <div className="text-xs text-gray-500">{new Date(order.date).toLocaleString()}</div>
                </div>
                <div className="mb-2">
                  {order.items.map((item, index) => {
                    const variation = item.variation || item.variations || {};
                    const variationDesc = [
                      variation.ram ? `RAM: ${variation.ram}` : null,
                      variation.storage ? `Storage: ${variation.storage}` : null,
                      variation.cpu ? `CPU: ${variation.cpu}` : null,
                      variation.gpu ? `GPU: ${variation.gpu}` : null,
                    ].filter(Boolean).join(', ');
                    return (
                      <div key={index} className="flex flex-wrap items-center gap-2 text-sm mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-200">{item.name}</span>
                        <span className="text-gray-500">x{item.quantity}</span>
                        {variationDesc && <span className="text-xs text-gray-500">[{variationDesc}]</span>}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-1 text-xs md:text-sm">
                  <span className="font-medium">Customer: <span className="text-gray-700 dark:text-gray-200">{order.address.firstName + " " + order.address.lastName}</span></span>
                  <span className="font-medium">Phone: <span className="text-gray-700 dark:text-gray-200">{order.address.phone}</span></span>
                  <span className="font-medium">Address: <span className="text-gray-700 dark:text-gray-200">{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</span></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span className="text-sm">Items: <span className="font-semibold">{order.items.length}</span></span>
                <span className="text-sm">Method: <span className="font-semibold">{order.paymentMethod}</span></span>
                <span className="text-sm">Payment: <span className={`font-semibold ${order.payment ? 'text-green-600' : 'text-red-600'}`}>{order.payment ? 'Done' : 'Pending'}</span></span>
                <span className="text-sm">Total: <span className="font-semibold">{currency}{order.amount}</span></span>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="p-2 font-semibold rounded border border-cyan-300 bg-cyan-50 dark:bg-gray-900 mt-2"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <button
                  className="mt-2 py-2 px-3 rounded bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors text-xs"
                  onClick={() => navigator.clipboard.writeText(order.address.phone)}
                  title="Copy customer phone"
                >
                  Copy Phone
                </button>
                <button
                  className="py-2 px-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xs"
                  onClick={() => window.open(`mailto:${order.address.email || ''}`)}
                  title="Contact customer"
                >
                  Email Customer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;