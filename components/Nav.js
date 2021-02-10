import Link from 'next/link';
import { RiUser2Fill } from 'react-icons/ri';
import { BsHeart, BsBag, BsBagFill, BsHeartFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { Turn as Hamburger } from 'hamburger-react';
import SearchBar from './SearchBar';
import { useStateProvider } from '../context/stateProvider';
import MiniBasket from './miniBasket/MiniBasket';
import MiniNav from './MiniNav';

const Nav = () => {
  const { basket, setMiniBasket, showMiniBasket, saved } = useStateProvider();
  const router = useRouter();
  const watchesRouter = router.pathname === '/';
  const strapsRouter = router.pathname === '/straps';

  // Show miniBasket when the bag icon is hovered
  const showMiniBasketOnHover = () => {
    router.pathname !== '/basket' ? setMiniBasket(true) : null;
  };

  return (
    <>
      {showMiniBasket && <MiniBasket />}
      <div className='bg-primary text-gray-100 hidden sm:block'>
        <div className='md:px-10'>
          <div className='flex items-center justify-between py-5 xl:py-0'>
            <div className='flex items-center'>
              <Link href='/'>
                <a className='md:text-4xl text-2xl font-bold px-10'>iwatches</a>
              </Link>
              <div className='middle_links hidden xl:block'>
                <div className='flex'>
                  <Link href='/'>
                    <a
                      className={`md:text-xl font-bold py-6 px-10 tracking-wide ${
                        watchesRouter
                          ? 'bg-secondary'
                          : 'border-l border-gray-300'
                      }`}>
                      Watches
                    </a>
                  </Link>
                  <Link href='/straps'>
                    <a
                      className={`md:text-xl font-bold py-6 px-10 tracking-wide ${
                        strapsRouter
                          ? 'bg-secondary'
                          : 'border-r border-gray-300'
                      }`}>
                      Straps
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <SearchBar />
            <div className='right_links flex items-center'>
              <div className='px-5'>
                <RiUser2Fill size={25} />
              </div>
              {/* <Link href='/saved-items'>
                <a>
                  <BsHeart size={25} />
                </a>
              </Link> */}
              <div className=' px-5 cursor-pointer'>
                <div
                  className='relative'
                  onClick={() =>
                    basket.length === 0 ? router.push('/saved-items') : null
                  }>
                  <span>
                    {!saved.length ? (
                      <BsHeart size={25} />
                    ) : (
                      <BsHeartFill className='text-pink-700' size={25} />
                    )}
                  </span>
                  {saved.length !== 0 && (
                    <span className=' text-center  text-xs font-medium '>
                      <p className='text-gray-100 -mt-5'>{saved.length}</p>
                    </span>
                  )}
                </div>
              </div>
              <div className=' px-5 cursor-pointer'>
                <div
                  className='relative'
                  onMouseEnter={() => showMiniBasketOnHover()}
                  onClick={() =>
                    basket.length === 0 ? router.push('/basket') : null
                  }>
                  <span>
                    {!basket.length ? (
                      <BsBag size={25} />
                    ) : (
                      <BsBagFill size={25} />
                    )}
                  </span>
                  {basket.length !== 0 && (
                    <span className=' text-center  text-xs font-medium '>
                      <p className='text-gray-800 -mt-4'>{basket.length}</p>
                    </span>
                  )}
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
