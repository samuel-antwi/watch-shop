import Layout from '@/components/Layout';
import RecentlyViewed from '@/components/RecentlyViewed';
import RelatedWatches from '@/components/RelatedWatches';
import graphcms from 'graphql/client';
import { ALL_WATCHES, GET_WATCH, GET_STRAP, ALL_STRAPS } from 'graphql/queries';
import { useStateProvider } from 'context/stateProvider';
import StrapDetails from '@/components/strap/StrapDetails';
import RelatedStraps from '@/components/RelatedStraps';

const ProductDetail = ({ product }) => {
  const { basket, durationNotification, showMiniBasket } = useStateProvider();

  return (
    <Layout>
      <div className='max-w-7xl mx-auto sm:px-10 mt-10 mb-20 px-5'>
        <StrapDetails product={product} />
        <div className='max-w-4xl mx-auto'>
          <RelatedStraps />
          <RecentlyViewed />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const { productsConnection } = await graphcms.request(ALL_STRAPS, {
    pageSize: 1000,
    slug: 'accessories',
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
  const { product } = await graphcms.request(GET_STRAP, { slug: params.slug });
  return {
    props: {
      product,
    },
  };
};
