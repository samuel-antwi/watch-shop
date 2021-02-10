import { useStateProvider } from 'context/stateProvider';
import React from 'react';
import Layout from '../components/Layout';
import { BsHeart, BsBag, BsPlus, BsExclamationSquare } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import RemoveFromBaketFeedback from '@/components/RemoveFromBaketFeedback';
import { useSnackbar } from 'react-simple-snackbar';

const deleteOptions = {
  position: 'bottom-right',
  style: {
    backgroundColor: 'red',
    border: '2px solid lightgreen',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
  },
};

const Basket = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar(deleteOptions);

  const {
    basket,
    removeFromBasket,
    isDeleted,
    increase,
    decrease,
  } = useStateProvider();

  console.log(basket);

  return (
    <Layout>
      {basket.length !== 0 ? (
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-white shadow'>
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
                      <span className='inline-flex items center space-x-6'>
                        <button
                          onClick={() => {
                            decrease(id);
                            if (quantity < 2) {
                              removeFromBasket(id);
                              openSnackbar('Item deleted');
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
                      <button className='flex w-40 items-center space-x-2 border py-2 text-gray-700 px-4'>
                        <BsHeart />
                        <p>Save for later</p>
                      </button>
                      <button
                        onClick={() => {
                          removeFromBasket(id);
                          openSnackbar('Item deleted');
                        }}
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
            <div className='col-span-1 bg-white shadow h-96'></div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center justify-items-center inset-0'>
          <div className='max-w-md mx-auto text-center'>
            <div className='mb-8 flex justify-center items-center'>
              <BsBag size={30} />
            </div>
            <p className='font-semibold text-lg tracking-wider mb-8 text-gray-800'>
              Your bag is currently empty
            </p>
            <p className='text-lg text-gray-800 tracking-wide'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              eum similique ducimus perspiciatis unde ad ipsa libero
              necessitatibus consectetur in?
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Basket;
