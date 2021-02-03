import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import graphcms from 'graphql/client';
import { GET_RELATED_WATCHES } from 'graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import { elipsis } from 'utils/elipsis';
import { useStateProvider } from 'context/stateProvider';

const RelatedWatches = () => {
  const { addToViewedItems } = useStateProvider();
  const [data, setData] = useState([]);
  const [size, setSize] = useState(4);
  const { query } = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [query]);

  const fetchProducts = async () => {
    const { products } = await graphcms.request(GET_RELATED_WATCHES, {
      slug: query.slug,
      size,
    });
    setData(products);
  };

  return (
    <div className='mt-32 '>
      <h1 className=' font-bold mb-3 tracking-wide uppercase text-gray-800'>
        You Might Also Like
      </h1>
      <div className='grid grid-cols-4 border border-gray-500 sm:p-10 p-5'>
        {data ? (
          data.map((product) => {
            const { name, id, images, price, slug } = product;
            return (
              <Link href={`/product/${slug}`} key={id}>
                <a
                  onClick={() => addToViewedItems(product)}
                  className='col-span-1'>
                  <Image src={images[0].url} width={200} height={200} />
                  <p className='text-sm mb-3'>{elipsis(name)}</p>
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
      </div>
    </div>
  );
};

export default RelatedWatches;
