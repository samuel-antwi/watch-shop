import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ title, children }) => {
  return (
    <>
      <div className='font-futura'>
        <Nav />
        <Head>{title}</Head>
        <div className='container pt-10'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
