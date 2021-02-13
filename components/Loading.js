import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex justify-items-center items-center max-w-sm mx-auto'>
      {/* <Loader color='#2d2d2d' type='ThreeDots' /> */}
      <Loader color='#2d2d2d' type='Oval' height={40} width={40} />
    </div>
  );
};

export default Loading;
