import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStateProvider } from 'context/stateProvider';

const MiniBasketButtons = () => {
  const { setMiniBasket } = useStateProvider();
  const router = useRouter();
  return (
    <div className=' bg-gray-100 py-3 px-4'>
      <div className='flex justify-between space-x-4 mb-3'>
        <button
          onClick={() => {
            router.push('/basket');
            setMiniBasket(false);
          }}
          className='bg-white border-2 p-4  font-bold text-gray-700 hover:bg-gray-200 tracking-wide w-full'>
          VIEW BAG
        </button>
        <button
          onClick={() => {
            router.push('/checkout');
            setMiniBasket(false);
          }}
          className='bg-green-700 hover:bg-green-900 border-2 p-4 text-white font-bold tracking-wide w-full'>
          CHECK OUT
        </button>
      </div>
      <hr />
      <p className='p-3 text-center text-lg capitalize text-gray-600 tracking-wider'>
        free delivery nationwide *
      </p>
    </div>
  );
};

export default MiniBasketButtons;
