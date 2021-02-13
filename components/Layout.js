import Head from 'next/head';
import Nav from './Nav';
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  const router = useRouter();

  return (
    <div
      className={`font-futura ${
        router.pathname === '/watches' || router.pathname === '/basket' ? 'bg-site' : 'bg-white'
      }`}>
      <Nav />
      <Head>{title}</Head>
      <div className='min-h-screen'>{children}</div>
      {router.pathname !== '/watches' && <Footer />}
    </div>
  );
};

export default Layout;
