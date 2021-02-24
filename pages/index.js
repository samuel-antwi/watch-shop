import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/Layout';
import Features from '@/components/Features';

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
            <div className='text-white landing__content mx-auto'>
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
                  src={'/images/apple-watch-home-page.png'}
                  alt='Apple Watch'
                />
              </div>
            </div>
          </div>
        </HomeWrapper>
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

// import Layout from '@/components/Layout';
// import Typewriter from 'typewriter-effect';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Home = () => {
//   const [typewriter, setType] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setType(true), 1000);
//   }, []);

//   return (
//     <Layout title='Home'>
//       <div className='bg-black min-h-screen text-gray-100 pt-20 '>
//         <div className='container mx-auto'>
//           {typewriter && (
//             <div className=' md:text-3xl max-w-3xl mx-auto tracking-wider mb-10 font-bold text-gray-300'>
//               <Typewriter
//                 options={{
//                   autoStart: true,
//                   loop: true,
//                   strings: ['The future of health could be on your wrist', 'Grab yours now!'],
//                 }}
//                 onInit={(typewriter) => {
//                   typewriter.pauseFor(500).deleteAll().start();
//                 }}
//               />
//             </div>
//           )}
//           <div className=' pt-10 max-w-7xl mx-auto'>
//             <div className='md:grid grid-cols-2'>
//               <motion.div
//                 initial={{ x: -500 }}
//                 animate={{ x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className='col-span-1 md:pt-10'>
//                 <h2 className='mb-5 text-yellow-600 font-semibold text-4xl'>Wear it Smartly</h2>
//                 <h1 className='md:text-4xl text-xl font-semibold tracking-wider mb-5'>
//                   A symbolic design. Inspired by a shared history.
//                 </h1>
//                 <p className='text-lg'>
//                   This special Apple Watch Series 6 celebrates connectedness across the African
//                   Diaspora. Available for a limited time only.
//                 </p>
//               </motion.div>
//               <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
//                 <ImageDiv className='col-span-1'>
//                   <img src='/images/apple-watch-home-page.png' alt='Apple watch' />
//                 </ImageDiv>
//               </motion.div>
//             </div>
//             <div className='flex items-center justify-between max-w-2xl mx-auto pt-10'>
//               <Link href='/watches'>
//                 <a className='landing_btn'>Shop all watches</a>
//               </Link>
//               <Link href='/straps'>
//                 <a className='landing_btn'>shop all straps</a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;

// const ImageDiv = styled.div`
//   img {
//     animation: reverse infinite 10s linear;
//     @keyframes rotate {
//       from {
//         transform: rotateY(180deg);
//       }
//       to {
//         transform: rotatey(360deg);
//       }
//     }
//   }
// `;
