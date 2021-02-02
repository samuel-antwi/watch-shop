import Layout from '@/components/Layout';
import WatchDetail from '@/components/product/WatchDetail';
import graphcms from 'graphql/client';
import { ALL_WATCHES, GET_WATCH } from 'graphql/queries';

const ProductDetail = ({ product }) => {
  return (
    <Layout>
      <div className='max-w-5xl mx-auto px-10'>
        <WatchDetail product={product} />
      </div>
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const { productsConnection } = await graphcms.request(ALL_WATCHES, {
    pageSize: 10,
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
