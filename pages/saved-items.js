import { useStateProvider } from 'context/stateProvider';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { BsTrash } from 'react-icons/bs';
import EmptySavedList from '@/components/EmptySavedList';

const SavedItems = () => {
  const { saved, addToBasket, removeFromSavedItems, inBasket } = useStateProvider();
  return (
    <Layout>
      {saved.length === 0 ? (
        <EmptySavedList />
      ) : (
        <>
          <div className='bg-gray-200 p-6 mb-10'>
            <h1 className='font-semibold tracking-widest text-center md:text-xl'>Saved items</h1>
          </div>
          <div className='md:grid xl:grid-cols-4 md:grid-cols-3 gap-5 max-w-7xl mx-auto px-8'>
            {saved.map((product) => {
              const { name, images, id, price, instock } = product;
              return (
                <div key={id}>
                  <div className='col-span-1 shadow border mb-3 '>
                    <Image
                      className='object-cover'
                      width={300}
                      height={300}
                      loading='eager'
                      src={images[0].url}
                    />
                    <div className='p-6'>
                      <p className='mb-6 text-sm text-gray-600'>{name}</p>
                      <span className='flex justify-between items-center'>
                        <p className='font-semibold tracking-wider text-gray-800'>£{price}. 00</p>
                        <button
                          onClick={() => removeFromSavedItems(id)}
                          className='p-2 bg-gray-200 rounded-full focus:rounded-full'>
                          <BsTrash size={20} className='' />
                        </button>
                      </span>
                    </div>
                  </div>
                  <button
                    disabled={!instock || inBasket(id)}
                    onClick={() => {
                      addToBasket(product);
                      removeFromSavedItems(id);
                    }}
                    className={`${
                      instock
                        ? 'border-green-600 text-gray-700'
                        : 'border-red-200 text-gray-300 cursor-default'
                    } border-2 w-full py-1 text-sm font-semibold tracking-widest`}>
                    {instock && !inBasket(id) ? (
                      'MOVE TO BAG'
                    ) : !instock ? (
                      'OUT OF STOCK'
                    ) : (
                      <span className='text-gray-400'>IN BAG</span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
};

export default SavedItems;
