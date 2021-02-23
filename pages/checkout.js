import Layout from '@/components/Layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
const Checkout = () => {
  return (
    <Layout title='Check out'>
      <div className='container mx-auto pt-10'>
        <h1 className='text-center'>Check out here</h1>
      </div>
    </Layout>
  );
};

export default withPageAuthRequired(Checkout);
