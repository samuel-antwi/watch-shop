import Layout from '../components/Layout';
import WatchList from '../components/WatchList';
import graphcms from '../graphql/client';
import { ALL_WATCHES } from '../graphql/queries';

const Watches = ({ edges, pageInfo }) => {
  console.log(edges);
  return (
    <Layout>
      <div className='pt-48'>
        <WatchList products={edges} />
      </div>
    </Layout>
  );
};

export default Watches;

export const getStaticProps = async () => {
  const {
    productsConnection: { edges, pageInfo },
  } = await graphcms.request(ALL_WATCHES, {
    slug: 'watch',
    pageSize: 10,
  });
  return {
    props: {
      edges,
      pageInfo,
    },
  };
};
