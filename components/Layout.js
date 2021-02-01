import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ title, children }) => {
  return (
    <>
      <div className='font-futura bg-site'>
        <Nav />
        <Head>{title}</Head>
        <div className='max-w-7xl mx-auto pt-10 min-h-screen'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
