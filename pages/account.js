import { useUser } from '@auth0/nextjs-auth0';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Profile() {
  const { user } = useUser();
  return (
    <Layout>
      <div className='container mx-auto pt-10'>
        <div className='flex justify-center items-center justify-items-center'>
          <div>
            <p>Hello {user.name}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
});
