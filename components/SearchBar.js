import React from 'react';
import { BsHeart, BsBag, BsBagFill, BsSearch } from 'react-icons/bs';
const SearchBar = () => {
  return (
    <>
      <div className='relative px-10 hidden lg:block w-full'>
        <input
          placeholder='Serch for items'
          className='p-3 w-full rounded-full focus:outline-none text-gray-900'
          type='text'
          name='search'
        />
        <button className=' absolute right-14 top-4 focus:outline-none'>
          <BsSearch className=' text-gray-800' size={20} />
        </button>
      </div>
      <button className=' focus:outline-none lg:hidden'>
        <BsSearch className=' text-gray-100' size={20} />
      </button>
    </>
  );
};

export default SearchBar;
