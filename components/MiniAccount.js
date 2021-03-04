import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { FaUserCircle } from 'react-icons/fa';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { useStateProvider } from 'context/stateProvider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
const MiniAccount = () => {
  const { user, error, isLoading } = useUser();
  const { showMiniAccount, setMiniAccount } = useStateProvider();

  return (
    showMiniAccount && (
      <motion.div
        onMouseEnter={() => setMiniAccount(true)}
        onMouseLeave={() => setMiniAccount(false)}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className='absolute border md:right-40 max-w-xs w-full top-16 z-20 bg-white'>
        <MiniAccountHeading user={user} />
        <div className='p-5'>
          <Link href='/account'>
            <a onClick={() => setMiniAccount(false)} className='flex items-center mb-5'>
              <FaUserCircle className='mr-5 text-gray-800' size={25} />
              <p>My Account</p>
            </a>
          </Link>
          <hr />
          <Link href='/orders'>
            <a onClick={() => setMiniAccount(false)} className='flex items-center pt-5'>
              <RiShoppingBag3Line className='mr-5 text-gray-800' size={25} />
              <p>My Orders</p>
            </a>
          </Link>
        </div>
      </motion.div>
    )
  );
};

export default MiniAccount;

export const MiniAccountHeading = ({ user }) => {
  const { setMiniAccount } = useStateProvider();
  return (
    <div className='bg-gray-100 p-5'>
      {user ? (
        <div className='flex items-center justify-between'>
          <p>Hi, Samuel</p>
          <a href='/api/auth/logout'>Logout</a>
        </div>
      ) : (
        <div className='flex items-center justify-between'>
          <a className='underline' href='/api/auth/login'>
            Login
          </a>
          <VscChromeClose
            onClick={() => setMiniAccount(false)}
            className='cursor-pointer'
            size={20}
          />
        </div>
      )}
    </div>
  );
};
