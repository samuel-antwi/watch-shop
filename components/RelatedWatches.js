import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import graphcms from 'graphql/client';
import { GET_RELATED_WATCHES } from 'graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import { elipsis } from 'utils/elipsis';
import Slider from 'react-slick';
import { useStateProvider } from 'context/stateProvider';
import { settings } from 'utils/slick';
import { motion } from 'framer-motion';

const RelatedWatches = () => {
  const { addToViewedItems } = useStateProvider();
  const [data, setData] = useState([]);
  const [size, setSize] = useState(10);
  const { query } = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [query]);

  const fetchProducts = async () => {
    const { products } = await graphcms.request(GET_RELATED_WATCHES, {
      slug: query.slug,
      name: 'Watch',
      size,
    });
    setData(products);
  };

  return (
    <div className='mt-32 '>
      <h1 className=' font-bold mb-3 tracking-wide uppercase text-gray-800'>You Might Also Like</h1>
      <Slider {...settings}>
        {data ? (
          data.map((product) => {
            const { name, id, images, price, slug } = product;
            return (
              <Link href={`/watch/${slug}`} key={id}>
                <a onClick={() => addToViewedItems(product)} className='col-span-1'>
                  <Image
                    src={images[0].url}
                    width={500}
                    height={500}
                    layout='responsive'
                    priority
                  />
                  <p className='text-sm mb-3 pt-4'>{elipsis(name)}</p>
                  <p className='font-medium'>£{price}</p>
                </a>
              </Link>
            );
          })
        ) : (
          <div className='text-center'>
            <p>Loading...</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default RelatedWatches;
