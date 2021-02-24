import React from 'react';
import Loading from '@/components/Loading';
import usePageBottom from 'hooks/usePageBottom';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';
import { useStateProvider } from '../context/stateProvider';
import graphcms from '../graphql/client';
import { ALL_WATCHES, ALL_STRAPS } from '../graphql/queries';
import StrapList from '@/components/StrapList';

const Straps = () => {
  const [pageSize, setPageSize] = useState(12);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [getPageInfo, setGetPageInfo] = useState('');
  const bottom = usePageBottom();

  useEffect(() => {
    fetchWatches();
  }, [pageSize]);

  useEffect(() => {
    fetchMore();
  }, [bottom]);

  const fetchWatches = async () => {
    setLoading(true);
    const {
      productsConnection: { edges, pageInfo },
    } = await graphcms.request(ALL_STRAPS, {
      slug: 'accessories',
      pageSize,
    });
    setProducts(edges);
    setGetPageInfo(pageInfo);
    setLoading(false);
  };

  // Fetch more watches when user scrolls to the bottom of the page
  const fetchMore = () => (bottom ? setPageSize((prev) => prev + 4) : null);

  return (
    <Layout>
      <div className='py-10 container mx-auto '>
        <StrapList products={products} loading={loading} />
        <div className='py-10 flex items-center justify-center'>
          {loading && getPageInfo.hasNextPage && <Loading />}
        </div>
      </div>
    </Layout>
  );
};

export default Straps;
