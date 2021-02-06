import { useStateProvider } from 'context/stateProvider';
import React from 'react';
import Layout from '../components/Layout';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import RemoveFromBaketFeedback from '@/components/RemoveFromBaketFeedback';

const Basket = () => {
  const { basket, removeFromBasket, isDeleted } = useStateProvider();
  return (
    <Layout>
      {basket.length !== 0 ? (
        <div className='max-w-6xl mx-auto bg-white'>
          <div className='grid grid-cols-3'>
            <div className='col-span-2 shadow-md'>
              <span className='flex justify-between items-center px-8 py-10'>
                <h1 className='font-semibold text-lg tracking-wider text-gray-700'>
                  MY BAG
                </h1>
                <p className='text-gray-700'>
                  Items are reserved for 60 minutes
                </p>
              </span>
              <hr />
              {basket.map(({ product, quantity }) => {
                const { price, name, images, id } = product;
                return (
                  <div className='flex py-5 border-b mx-5 relative' key={id}>
                    <div>
                      <Image
                        src={images[0].url}
                        alt={name}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='font-semibold tracking-wider text-gray-800 text-lg'>
                        £ {price}. 00
                      </h2>
                      <p className='text-gray-600'>{name}</p>
                      <span className='flex items center justify-center space-x-3'>
                        <p>-</p>
                        <p>{quantity}</p>
                        <p>+</p>
                      </span>
                      <button className='flex w-40 mx-auto items-center space-x-2 border py-2 text-gray-700 px-4'>
                        <BsHeart />
                        <p>Save for later</p>
                      </button>
                      <button
                        onClick={() => removeFromBasket(id)}
                        className='absolute top-5 right-5'>
                        <VscChromeClose size={26} />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className='flex justify-end py-10 px-8 space-x-6 font-semibold tracking-wider text-gray-800'>
                <span className=''>SUB-TOTAL</span>
                <span>£95.00</span>
              </div>
            </div>
            <div className='col-span-1'></div>
          </div>
        </div>
      ) : (
        <div>
          <p>Your basket is currently empty</p>
        </div>
      )}
    </Layout>
  );
};

export default Basket;
