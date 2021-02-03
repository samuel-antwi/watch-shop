import Head from 'next/head';
import Nav from './Nav';
import { useRouter } from 'next/router';

const Layout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`font-futura ${
          router.pathname == '/' ? 'bg-site' : 'bg-white'
        }`}>
        <Nav />
        <Head>{title}</Head>
        <div className='max-w-7xl mx-auto py-20 min-h-screen'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
