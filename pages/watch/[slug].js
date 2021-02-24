import Layout from '@/components/Layout';
import WatchDetail from '@/components/watch/WatchDetail';
import RecentlyViewed from '@/components/RecentlyViewed';
import RelatedWatches from '@/components/RelatedWatches';
import graphcms from 'graphql/client';
import { ALL_WATCHES, GET_WATCH } from 'graphql/queries';
import { useStateProvider } from 'context/stateProvider';

const ProductDetail = ({ product }) => {
  const { basket, durationNotification, showMiniBasket } = useStateProvider();

  return (
    <Layout>
      <div className='max-w-7xl mx-auto sm:px-10 px-5'>
        <WatchDetail product={product} />
        <div className='max-w-4xl mx-auto'>
          <RelatedWatches />
          <RecentlyViewed />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const { productsConnection } = await graphcms.request(ALL_WATCHES, {
    pageSize: 1000,
    slug: 'watch',
  });
  return {
    paths: productsConnection.edges.map(({ node }) => ({
      params: {
        slug: node.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { product } = await graphcms.request(GET_WATCH, { slug: params.slug });
  return {
    props: {
      product,
    },
  };
};
