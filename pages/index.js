import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/Layout';
import Features from '@/components/Features';
import WatchShowcase from '@/components/WatchShowcase';
import StrapShowcase from '@/components/StrapshowCase';

const Home = () => {
  const [typewriter, setType] = useState(false);

  useEffect(() => {
    setTimeout(() => setType(true), 3000);
  }, []);

  return (
    <>
      <Layout>
        <HomeWrapper>
          <div className='landing__page'>
            <div className='text-white landing__content mx-auto px-12 xl:px-0'>
              <div className=' pt-40 grid grid-cols-1 md:grid-cols-2 px-4'>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 2 }}>
                  {typewriter && (
                    <div className='md:text-2xl font-bold mb-10 text-gray-300'>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          strings: [
                            'The future of health could be on your wrist...',
                            'Grab yours now!',
                          ],
                        }}
                        onInit={(typewriter) => {
                          typewriter.pauseFor(500).deleteAll().start();
                        }}
                      />
                    </div>
                  )}
                  <h1 className='text-3xl md:text-6xl font-bold'>
                    Wear it <span className='text-purple-700'>Smartly</span>
                  </h1>
                  <h3 className='py-4 md:text-2xl font-bold tracking-widest capitalize'>
                    technology of the future is here
                  </h3>
                  <p className=' text-gray-400 md:text-xl'>
                    This special Apple Watch Series 6 celebrates connectedness across the African
                    Diaspora. Available for a limited time only.
                  </p>
                </motion.div>
                <motion.img
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 2 }}
                  className='col-span-1'
                  src={'/images/landing.c4729d86.png'}
                  alt='Apple Watch'
                />
              </div>
            </div>
          </div>
        </HomeWrapper>
        <WatchShowcase />
        <StrapShowcase />
        <hr />
        <Features />
      </Layout>
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  overflow-x: hidden !important;
  .landing__page {
    background: url('/images/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
  }
  .landing__watch {
    width: 100%;
  }
  .landing__content {
    max-width: 1300px;
  }
`;
