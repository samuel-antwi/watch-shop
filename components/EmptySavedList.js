import { useStateProvider } from 'context/stateProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSync } from 'react-icons/fa';
import { useUser } from '@auth0/nextjs-auth0';

const EmptySavedList = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <div className='flex flex-col justify-center items-center pt-20 '>
      <div className='max-w-md mx-auto text-center'>
        <p className='font-semibold text-lg tracking-widest mb-8 text-gray-800'>
          You have no Saved Items
        </p>
        {!user && (
          <div>
            <div className='mb-8 flex justify-center items-center'>
              <FaSync size={30} />
            </div>
            <p className='text-lg text-gray-800 tracking-wide mb-5'>
              Sign in to sync your Saved Items across all your devices.
            </p>
            <a
              href='/api/auth/login'
              className='bg-gray-700 hover:bg-gray-900 text-gray-100 tracking-widest py-2 px-4 w-64 font-semibold '>
              Sign In
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptySavedList;
