import Link from 'next/link';
import { RiUser2Fill } from 'react-icons/ri';
import { BsHeart, BsBag, BsBagFill } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Turn as Hamburger } from 'hamburger-react';
import SearchBar from './SearchBar';

const Nav = () => {
  const [basket, setBasket] = useState(['s', '3']);
  const router = useRouter();
  const watchesRouter = router.pathname === '/';
  const strapsRouter = router.pathname === '/straps';

  return (
    <>
      <div className='bg-primary text-gray-100 hidden smd:block'>
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
              <div className='px-10'>
                <RiUser2Fill size={25} />
              </div>
              <Link href='/saved-items'>
                <a>
                  <BsHeart size={25} />
                </a>
              </Link>
              <div className=' px-10'>
                <Link href='/basket'>
                  <a className='relative'>
                    <span>
                      {!basket.length ? (
                        <BsBag size={25} />
                      ) : (
                        <BsBagFill size={25} />
                      )}
                    </span>
                    <span className=' text-center  text-xs font-medium '>
                      <p className='text-gray-800 -mt-4'>{basket.length} </p>
                    </span>
                  </a>
                </Link>
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

export const MiniNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='bg-gray-900 p-5 text-gray-100'>
      <div className='hidden smd:block'>
        <div className='container flex justify-between items-center space-x-4'>
          <Link href='/'>
            <a className='uppercase font-bold py-1.5 px-5 text-gray-100 tracking-wider border-2 border-gray-100'>
              watches
            </a>
          </Link>
          <p className='text-center'>
            Get 15% off everything when you spend £299 with code:{' '}
            <span className='font-bold tracking-wider'>SABUTOWATCHES</span>
          </p>
          <Link href='/straps'>
            <a className='uppercase font-bold py-1.5 px-5 text-gray-100 tracking-wider border-2 border-gray-100'>
              straps
            </a>
          </Link>
        </div>
      </div>
      <div className='smd:hidden'>
        <div className='flex items-center justify-between text-gray-100'>
          <Link href='/'>
            <a className='text-2xl font-bold'>iwatches</a>
          </Link>
          <Hamburger
            duration={0.8}
            size={25}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </div>
  );
};
