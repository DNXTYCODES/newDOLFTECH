
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {


    const { currency, getCartAmount } = useContext(ShopContext);
    const [location, setLocation] = useState('lagos');

    // Lagos: 5k-7k, Outside: 10k-20k
    const getShippingFee = () => {
      if (location === 'lagos') return 6000;
      if (location === 'outside') return 15000;
      return 0;
    };
    const shippingFee = getShippingFee();

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between items-center'>
          <p>Shipping Fee</p>
          <div>
            <select
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="border rounded px-2 py-1 text-xs"
            >
              <option value="lagos">Within Lagos (₦5,000 - ₦7,000)</option>
              <option value="outside">Outside Lagos (₦10,000 - ₦20,000)</option>
            </select>
            <span className="ml-2">{currency} {shippingFee.toLocaleString()}.00</span>
          </div>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : (getCartAmount() + shippingFee).toLocaleString()}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
