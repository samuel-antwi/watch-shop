import { useStateProvider } from 'context/stateProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsBag } from 'react-icons/bs';

const EmptyBasket = () => {
  const router = useRouter();
  const { saved } = useStateProvider();
  return (
    <div className='flex flex-col justify-center items-center pt-10 '>
      <div className='max-w-md mx-auto text-center'>
        <div className='mb-8 flex justify-center items-center'>
          <BsBag size={30} />
        </div>
        <p className='font-semibold text-lg tracking-widest mb-8 text-gray-800'>
          Your bag is currently empty
        </p>
        <p className='text-lg text-gray-800 tracking-wide mb-5'>
          Items remain in your bag for 60 minutes, and then they’re deleted
        </p>
        {saved.length > 0 && (
          <button
            onClick={() => router.push('/saved-items')}
            className='btn-green tracking-widest mb-5'>
            VIEW SAVED ITEMS
          </button>
        )}
        <div>
          <Link href='/'>
            <a className='underline'>Continue Shopping</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;
