import Layout from '@/components/Layout';
import WatchDetail from '@/components/product/WatchDetail';
import RecentlyViewed from '@/components/RecentlyViewed';
import RelatedWatches from '@/components/RelatedWatches';
import graphcms from 'graphql/client';
import { ALL_WATCHES, GET_WATCH } from 'graphql/queries';

const ProductDetail = ({ product }) => {
  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find((element) => element > 50);

  console.log(found);

  return (
    <Layout>
      <div className='max-w-6xl mx-auto sm:px-10 px-5'>
        <WatchDetail product={product} />
        <RelatedWatches />
        <RecentlyViewed />
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
  console.log(params);
  const { product } = await graphcms.request(GET_WATCH, { slug: params.slug });
  console.log(product);
  return {
    props: {
      product,
    },
  };
};
