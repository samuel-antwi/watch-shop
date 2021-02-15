import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useStateProvider } from 'context/stateProvider';
import { elipsis } from 'utils/elipsis';
import Slider from 'react-slick';
import { slickSettings } from 'utils/slick';
import { motion } from 'framer-motion';

const RecentlyViewed = () => {
  const { viewedItems, clearViewedItems } = useStateProvider();

  return viewedItems.length !== 0 ? (
    <div className='md:mt-40 mt-20 mb-20'>
      <div className='flex items-center justify-between '>
        <h1 className=' font-bold mb-3 tracking-wide uppercase text-xs md:text-base text-gray-800'>
          Recently viewed
        </h1>
        <button
          onClick={clearViewedItems}
          className='bg-gray-100 px-3 py-1 text-xs md:text-base uppercase tracking-widest text-gray-800 font-semibold'>
          clear all
        </button>
      </div>
      <Slider {...slickSettings(viewedItems.length)}>
        {viewedItems.map((product) => {
          const { name, id, images, price, slug } = product;
          return (
            <React.Fragment key={id}>
              <Link href={`/product/${slug}`}>
                <a className='col-span-4 '>
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: 'spring', stiffness: 200 }}>
                    <Image
                      className='mb-5 '
                      src={images[0]?.url}
                      width={400}
                      height={400}
                      alt={name}
                      layout='responsive'
                      priority
                    />
                  </motion.div>
                  <p className='text-sm mb-3 pt-4'>{elipsis(name)}</p>
                  <p className='font-medium'>£{price}</p>
                </a>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
      {/* </div> */}
    </div>
  ) : null;
};

export default RecentlyViewed;

//  <div className='mt-32'>
//       <h1 className=' font-bold mb-3 tracking-wide uppercase text-gray-800'>
//         Recently viewed
//       </h1>
//       <div className='grid grid-cols-4 border border-gray-500 sm:p-10 p-5'>
//         {viewedItems.length !== 0
//           ? viewedItems.map((product) => {
//               const { name, id, images, price, slug } = product.product.node;
//               return (
//                 <Link href={`/product/${slug}`} key={id}>
//                   <a className='col-span-1'>
//                     <Image src={images[0]?.url} width={200} height={200} />
//                     <p className='text-sm mb-3'>{elipsis(name)}</p>
//                     <p className='font-medium'>£{price}</p>
//                   </a>
//                 </Link>
//               );
//             })
//           : null}
//       </div>
//     </div>
