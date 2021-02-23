import { useUser } from '@auth0/nextjs-auth0';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '@/components/Loading';

const Orders = () => {
  const { isLoading } = useUser();
  return (
    <Layout>
      <div className='container mx-auto pt-10'>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='flex justify-center items-center justify-items-center'>
            <div>
              <p>Your oders</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withPageAuthRequired(Orders);
