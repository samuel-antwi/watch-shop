import { useStateProvider } from 'context/stateProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSync } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';

const EmptySavedList = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col justify-center items-center pt-20 '>
      <div className='max-w-md mx-auto text-center'>
        <div className='mb-8 flex justify-center items-center'>
          <FaSync size={30} />
        </div>
        <p className='font-semibold text-lg tracking-widest mb-8 text-gray-800'>
          You have no Saved Items
        </p>
        <p className='text-lg text-gray-800 tracking-wide mb-5'>
          Sign in to sync your Saved Items across all your devices.
        </p>
        <button
          onClick={() => router.push('/login')}
          className='bg-gray-900 text-gray-100 tracking-widest py-2 w-64 font-semibold '>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default EmptySavedList;
