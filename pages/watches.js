import Layout from '../components/Layout';
import WatchList from '../components/WatchList';
import { useStateProvider } from '../context/stateProvider';
import graphcms from '../graphql/client';
import { ALL_WATCHES } from '../graphql/queries';

const Watches = ({ edges, pageInfo }) => {
  const { user, showMiniBasket } = useStateProvider();

  return (
    <Layout>
      <div className='py-10 container mx-auto px-10'>
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
    pageSize: 12,
  });
  return {
    props: {
      edges,
      pageInfo,
    },
  };
};
