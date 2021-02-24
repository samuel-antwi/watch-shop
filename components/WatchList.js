import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useStateProvider } from '../context/stateProvider';

const WatchList = ({ products, loading }) => {
  const {
    addToBasket,
    addToViewedItems,
    saveForLater,
    isSaved,
    increase,
    inBasket,
  } = useStateProvider();

  // if (loading) return <Loading />;

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
      {products?.map((product) => {
        const { name, images, id, price, instock, slug } = product.node;
        return (
          <div className='bg-white relative' key={id}>
            <div
              onClick={() => addToViewedItems(product.node)}
              className='col-span-1 shadow border p-5'>
              <Link href={`/product/${slug}`}>
                <a>
                  <motion.div whileHover={{ scale: 1.07 }}>
                    <Image width={300} height={300} loading='eager' src={images[0].url} />
                  </motion.div>
                </a>
              </Link>
              <div className='p-6'>
                <Link href={`/product/${slug}`}>
                  <a>
                    <p className='mb-6 text-gray-600'>{name}</p>
                  </a>
                </Link>
                <span className='flex justify-between items-center mb-10'>
                  <p className='font-semibold tracking-wider text-gray-800'>£{price}. 00</p>
                  <button
                    disabled={isSaved(id)}
                    onClick={() => {
                      saveForLater(product.node);
                    }}
                    className='p-2 bg-gray-200 cursor-default rounded-full'>
                    {isSaved(id) ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
                  </button>
                </span>
              </div>
            </div>
            <button
              disabled={!instock}
              // onClick={() => addToBasket(product.node)}
              onClick={() => {
                if (inBasket(id)) {
                  return increase(id);
                } else {
                  addToBasket(product.node);
                }
              }}
              className={`${
                instock
                  ? ' bg-gray-700 text-gray-100 border border-gray-700 hover:bg-gray-900'
                  : 'bg-red-400 cursor-not-allowed text-gray-100 border border-red-400'
              }  w-full py-2 text-sm font-semibold tracking-widest shadow border absolute bottom-0`}>
              {instock ? 'ADD TO BAG' : 'OUT OF STOCK'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;
