import Link from 'next/link';
import { RiUser2Fill } from 'react-icons/ri';
import { BsHeart, BsBag, BsBagFill, BsHeartFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { Turn as Hamburger } from 'hamburger-react';
import SearchBar from './SearchBar';
import { useStateProvider } from '../context/stateProvider';
import MiniBasket from './miniBasket/MiniBasket';
import MiniNav from './MiniNav';
import MiniAccount from './MiniAccount';

const Nav = () => {
  const {
    basket,
    setMiniBasket,
    showMiniBasket,
    saved,
    itemCount,
    showMiniAccount,
    setMiniAccount,
  } = useStateProvider();
  const router = useRouter();
  const watchesRouter = router.pathname === '/watches';
  const strapsRouter = router.pathname === '/straps';

  // Show miniBasket when the bag icon is hovered
  const showMiniBasketOnHover = () => {
    router.pathname !== '/basket' ? setMiniBasket(true) : null;
  };

  return (
    <>
      {showMiniBasket && <MiniBasket />}
      {showMiniAccount && <MiniAccount />}
      <div className='bg-primary text-gray-100 hidden sm:block md:mt-6'>
        <div className='md:px-10'>
          <div className='flex items-center justify-between py-5 xl:py-0'>
            <div className='flex items-center'>
              <Link href='/'>
                <a className='md:text-4xl text-2xl font-bold px-10'>iwatches</a>
              </Link>
              <div className='middle_links hidden xl:block'>
                <div className='flex'>
                  <Link href='/watches'>
                    <a
                      className={`md:text-xl font-bold py-6 px-10 tracking-wide ${
                        watchesRouter ? 'bg-secondary' : 'border-l border-gray-300'
                      }`}>
                      Watches
                    </a>
                  </Link>
                  <Link href='/straps'>
                    <a
                      className={`md:text-xl font-bold py-6 px-10 tracking-wide ${
                        strapsRouter ? 'bg-secondary' : 'border-r border-gray-300'
                      }`}>
                      Straps
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <SearchBar />
            <div className='right_links flex items-center'>
              <div
                onClick={() => {
                  setMiniAccount(true);
                  setMiniBasket(false);
                }}
                className='px-5 flex flex-col cursor-pointer  justify-center items-center'>
                <FaUserCircle className='mb-1.5 ' size={22} />
                <p className='text-sm'>Account</p>
              </div>
              <Link href='/saved-items'>
                <a className=' px-5 cursor-pointer flex flex-col justify-center items-center '>
                  <span className='mb-1.5'>
                    {!saved.length ? (
                      <BsHeart size={22} />
                    ) : (
                      <BsHeartFill className=' text-basket_count' size={22} />
                    )}
                  </span>
                  <p className='text-sm'>Saved</p>
                </a>
              </Link>
              <div className=' px-5 '>
                <div className='relative flex flex-col justify-center items-center'>
                  <div
                    onMouseEnter={() => {
                      if (router.pathname !== '/basket') {
                        setMiniBasket(true);
                        setMiniAccount(false);
                      }
                    }}
                    onClick={() => (basket.length === 0 ? router.push('/basket') : null)}
                    className='mb-1.5 cursor-pointer'>
                    {!basket.length ? <BsBag size={22} /> : <BsBagFill size={22} />}
                    {basket.length > 0 && (
                      <p className='absolute -top-3 left-7 h-5 w-5 rounded-full text-center flex items-center justify-center bg-basket_count text-gray-100 font-medium text-xs'>
                        {itemCount}
                      </p>
                    )}
                  </div>
                  <p className='text-sm'>Basket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiniNav />
    </>
  );
};
export default Nav;
