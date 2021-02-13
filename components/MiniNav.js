import { useStateProvider } from 'context/stateProvider';
import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { useSnackbar } from 'react-simple-snackbar';
import Link from 'next/link';

const MiniNav = () => {
  const { showMiniBasket } = useStateProvider();
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`${
        !showMiniBasket ? ' bg-mini_nav_sale' : 'bg-secondary'
      } p-5 text-gray-100 z-10`}>
      <div className='hidden sm:block'>
        <div className='container flex justify-between items-center space-x-4'>
          <Link href='/watches'>
            <a className='uppercase font-bold py-1 px-5 text-gray-100 tracking-wider border-2 border-gray-100'>
              watches
            </a>
          </Link>
          <p className='text-center'>
            Get 15% off everything when you spend £299 with code:{' '}
            <span className='font-bold tracking-wider'>SABUTOWATCHES</span>
          </p>
          <Link href='/straps'>
            <a className='uppercase font-bold py-1 px-5 text-gray-100 tracking-wider border-2 border-gray-100'>
              straps
            </a>
          </Link>
        </div>
      </div>
      <div className='sm:hidden'>
        <div className='flex items-center justify-between text-gray-100'>
          <Link href='/'>
            <a className='text-2xl font-bold'>iwatches</a>
          </Link>
          <Hamburger duration={0.8} size={25} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
