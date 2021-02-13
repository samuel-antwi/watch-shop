import { useStateProvider } from 'context/stateProvider';
import React from 'react';
import Layout from '../components/Layout';
import { BsHeart, BsBag, BsPlus, BsExclamationSquare } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import { useSnackbar } from 'react-simple-snackbar';
import EmptyBasket from '@/components/EmptyBasket';
import Link from 'next/link';
import Checkout from '@/components/Checkout';
import { motion } from 'framer-motion';
import { SAVE_FOR_LATER } from 'types';

const Basket = () => {
  const [openSnackbar] = useSnackbar();
  const {
    total,
    basket,
    removeFromBasket,
    isDeleted,
    increase,
    decrease,
    saveForLater,
    saved,
    clearBasket,
    isBrowser,
  } = useStateProvider();

  return (
    <Layout>
      {basket.length !== 0 ? (
        <div className='xl:max-w-7xl mx-auto px-8 pt-10'>
          <div className='lg:grid grid-cols-3 gap-4'>
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className='col-span-2 bg-white shadow'>
              <span className='flex justify-between items-center px-8 py-10'>
                <h1 className='font-semibold text-lg tracking-wider text-gray-700'>MY BAG</h1>
                <p className='text-gray-700'>Items are reserved for 60 minutes</p>
              </span>
              <hr />
              <div className='flex text-center justify-center py-5'>
                <button
                  onClick={clearBasket}
                  className='text-red-500 border border-red-600 px-2 py-1 rounded text-sm  uppercase font-medium tracking-wider'>
                  Clear all
                </button>
              </div>
              {basket.map((product) => {
                const { price, name, images, id, slug, quantity } = product;
                return (
                  <div className='flex py-5 border-b mx-5 relative' key={id}>
                    <div>
                      <Link href={`/product/${slug}`}>
                        <a>
                          <Image src={images[0].url} alt={name} width={200} height={200} />
                        </a>
                      </Link>
                    </div>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='font-semibold tracking-wider text-gray-800 text-lg'>
                        £ {price}. 00
                      </h2>
                      <Link href={`/product/${slug}`}>
                        <a className='text-gray-600 hover:text-blue-400'>{name}</a>
                      </Link>
                      <span className='inline-flex items center space-x-6'>
                        <button
                          onClick={() => {
                            decrease(id);
                            if (quantity < 2) {
                              removeFromBasket(id);
                            }
                          }}
                          className={`border px-2 hover:bg-gray-200 border-gray-400 rounded`}>
                          <BiMinus size={20} />
                        </button>
                        <p>{quantity}</p>
                        <button
                          onClick={() => increase(id)}
                          className='border px-2 hover:bg-gray-200 border-gray-400 rounded'>
                          <BsPlus size={20} />
                        </button>
                      </span>
                      {quantity >= 6 && (
                        <p className='text-sm text-red-600'>
                          A maximum of 5 items are allowed at a time!
                        </p>
                      )}
                      <button
                        onClick={() => {
                          removeFromBasket(id);
                          saveForLater(product);
                        }}
                        className='flex w-40 items-center space-x-2 border py-2 text-gray-700 hover:bg-gray-300 px-4'>
                        <BsHeart />
                        <p>Save for later</p>
                      </button>
                      <button
                        onClick={() => {
                          removeFromBasket(id);
                        }}
                        className='absolute md:top-5 md:right-5 right-0 top-0'>
                        <VscChromeClose size={26} />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className='flex justify-end py-10 px-8 space-x-6 font-semibold tracking-wider text-gray-800'>
                <span className=''>SUB-TOTAL</span>
                <span>£{total}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className='col-span-1 bg-white shadow h-96 px-8'>
              <Checkout />
            </motion.div>
          </div>
        </div>
      ) : (
        <EmptyBasket />
      )}
    </Layout>
  );
};

export default Basket;
