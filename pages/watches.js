import Loading from '@/components/Loading';
import usePageBottom from 'hooks/usePageBottom';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';
import WatchList from '../components/WatchList';
import { useStateProvider } from '../context/stateProvider';
import graphcms from '../graphql/client';
import { ALL_WATCHES } from '../graphql/queries';

const Watches = () => {
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
    } = await graphcms.request(ALL_WATCHES, {
      slug: 'watch',
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
        <WatchList products={products} loading={loading} />
        <div className='py-10 flex items-center justify-center'>
          {loading && getPageInfo.hasNextPage && <Loading />}
        </div>
      </div>
    </Layout>
  );
};

export default Watches;

// export const getStaticProps = async () => {
//   const {
//     productsConnection: { edges, pageInfo },
//   } = await graphcms.request(ALL_WATCHES, {
//     slug: 'watch',
//     pageSize: 12,
//   });
//   return {
//     props: {
//       edges,
//       pageInfo,
//     },
//   };
// };
