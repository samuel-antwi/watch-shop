import Head from 'next/head';
import Nav from './Nav';
import { useRouter } from 'next/router';

const Layout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`font-futura ${
          router.pathname === '/' || router.pathname === '/basket'
            ? 'bg-site'
            : 'bg-white'
        }`}>
        <Nav />
        <Head>{title}</Head>
        <div className='min-h-screen'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
