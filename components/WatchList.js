import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WatchList = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggle = (id) => {
    window.addEventListener('mouseover', () => {
      products.filter((product) => {
        console.log(product.node.id);
      });
    });
  };

  return (
    <WatchGridStyles className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
      {products.map((product) => {
        const { images, name, price, id, slug } = product.node;
        return (
          <Watch
            whileHover={{ scale: 1.04 }}
            key={id}
            className='col-span-1 bg-white shadow-2xl rounded-2xl relative'>
            {images.map((image, index) => (
              <div key={index}>
                <Link href={`/${slug}`}>
                  <a>
                    <Image
                      src={image.url}
                      width={200}
                      height={200}
                      layout='responsive'
                      alt={name}
                    />
                  </a>
                </Link>
              </div>
            ))}
            <div className='px-4'>
              <p className='mb-20 pt-5'>{name}</p>
              <div className='flex justify-between items-center absolute w-11/12 bottom-3'>
                <p className='font-medium'>£{price}</p>
                <Button className='btn-indigo add_to_basket'>ADD TO BAG</Button>
                <span onMouseEnter={() => toggle(id)} className='saved-btn'>
                  {isHovered ? (
                    <BsHeartFill className='' size={20} />
                  ) : (
                    <BsHeart className='' size={20} />
                  )}
                </span>
              </div>
            </div>
          </Watch>
        );
      })}
    </WatchGridStyles>
  );
};

export default WatchList;

const WatchGridStyles = styled.div``;

const Watch = styled(motion.div)`
  .add_to_basket {
    display: none;
  }

  :hover .add_to_basket {
    display: block;
  }
`;

const Button = styled(motion.div)``;
