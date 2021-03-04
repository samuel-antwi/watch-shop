import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUserCircle } from 'react-icons/fa';
import { BsHeartFill, BsHeart, BsBagFill, BsBag } from 'react-icons/bs';
import { useStateProvider } from 'context/stateProvider';

const SideNav = ({ isOpen, setOpen }) => {
  const { saved, basket, setMiniBasket, setMiniAccount, itemCount } = useStateProvider();

  const router = useRouter();

  const account = router.pathname === '/account';
  const save = router.pathname === '/saved-items';
  const basketPath = router.pathname === '/basket';
  const watches = router.pathname === '/watches';
  const straps = router.pathname === '/straps';

  return (
    <motion.div
      className='absolute bg-primary w-full min-h-screen z-10 md:hidden'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <div className='text-gray-100 w-full flex flex-col z-10'>
        <div
          onClick={() => {
            setMiniAccount(true);
          }}
          className={`${account && 'bg-gray-900'} cursor-pointer p-4`}>
          <FaUserCircle size={22} />
        </div>
        <Link href='/saved-items'>
          <a className={`${save && 'bg-gray-900'} cursor-pointer p-4`}>
            <span className=''>
              {!saved.length ? (
                <BsHeart size={22} />
              ) : (
                <BsHeartFill className=' text-basket_count' size={22} />
              )}
            </span>
          </a>
        </Link>
        <div
          onClick={() => router.push('/basket')}
          className={`${basketPath && 'bg-gray-900'} cursor-pointer p-4`}>
          {!basket.length ? <BsBag size={22} /> : <BsBagFill size={22} />}
        </div>
        <Links watches={watches} setOpen={setOpen} link='watches'>
          Watches
        </Links>
        <Links
          straps={straps}
          className={`${straps && 'bg-gray-900'} cursor-pointer p-4`}
          setOpen={setOpen}
          link='straps'>
          Straps
        </Links>
      </div>
    </motion.div>
  );
};

export default SideNav;

const Links = ({ link, children, setOpen, watches, straps }) => {
  return (
    <Link href={link}>
      <a
        onClick={() => setOpen(false)}
        className={`${watches && 'bg-gray-900'} ${
          straps && 'bg-gray-900'
        } uppercase cursor-pointer p-4 text-gray-300 tracking-widest hover:text-primary text-sm`}>
        {children}
      </a>
    </Link>
  );
};
