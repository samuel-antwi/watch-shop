import styled from 'styled-components';
import { ImTwitter, ImFacebook, ImYoutube } from 'react-icons/im';
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { BsLockFill } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <Styles>
      <div className='footer__links mt-20'>
        <div className='footer_links_wrapper mx-auto grid md:grid-cols-3 text-gray-200 px-5 md:px-40 py-10 gap-10'>
          <div className='col-span-1'>
            <h1 className='text-2xl font-semibold text-gray-200'>Sabuto Watch</h1>
            <p className='text-gray-400 py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo voluptas
              laboriosam incidunt, architecto laborum iusto at minima commodi magni!
            </p>
            <div className='flex items-center text-gray-200 mb-3'>
              <div className='mr-2'>
                <FaCcVisa size='2rem' />
              </div>
              <div className='mx-2'>
                <FaCcMastercard size='2rem' />
              </div>
              <div className='mx-2'>
                <SiAmericanexpress size='2rem' />
              </div>
              <div className='mx-2'>
                <FaPaypal size='2rem' />
              </div>
            </div>
            <div className='flex items-center'>
              <BsLockFill />
              <p className='ml-1 text-sm'>Secure online payment</p>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='mb-3'>Useful links</h1>
            <div>
              <Link href='/'>
                <a>FAQ</a>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <a>Gift cards</a>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <a>Returns</a>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <a>Policies</a>
              </Link>
            </div>
          </div>
          <div className='col-span-1'></div>
        </div>
        <p className='text-center text-gray-200 tracking-wider pb-2'>
          © {getCurrentYear} Sabuto All Right Reserved
        </p>
      </div>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  .social__media {
    background: #7d1fff;
  }

  .footer__links {
    background: #363636;
  }

  .footer__links__wrapper {
    max-width: 1100px;
  }
`;
