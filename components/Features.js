import styled from 'styled-components';
import { FaMicrophoneAlt, FaMobile, FaWifi } from 'react-icons/fa';

const Features = () => {
  return (
    <div className='py-10 container mx-auto md:px-12 px-8'>
      <h1 className='text-gray-800 text-3xl xl:text-6xl md:text-5xl font-extrabold py-20 text-center'>
        Splendid Features
      </h1>
      <div className='md:grid md:grid-cols-2 gap-10'>
        <img
          className='col-span-1 feature__image mb-10 md:mb-0'
          src={'/images/feturesImage.jpeg'}
          alt='watches'
        />
        <div className='col-span-1 px-4 md:px-0'>
          <h1 className='text-gray-500 font-extrabold text-xl'>MEET WITH OUR</h1>
          <p className='text-2xl font-medium mb-10 text-gray-700'>
            Unique features that are hard to find in other brands
          </p>
          <div className='flex mb-10'>
            <div className='text-purple-700 mr-10'>
              <FaMicrophoneAlt size='2.5rem ' />
            </div>
            <span>
              <h1 className='text-xl font-bold'>Voice Recognition</h1>
              <p>It is time to put your unique voice to work</p>
            </span>
          </div>
          <div className='flex mb-10'>
            <div className='text-purple-700 mr-10'>
              <FaMobile size='2.5rem ' />
            </div>
            <span>
              <h1 className='text-xl font-bold'>Connect with your phone</h1>
              <p>It is time to put your unique voice to work</p>
            </span>
          </div>
          <div className='flex mb-10'>
            <div className='text-purple-700 mr-10'>
              <FaWifi size='2.5rem ' />
            </div>
            <span>
              <h1 className='text-xl font-bold'>Connect with your phone</h1>
              <p>
                Making a phone, checking the temperature? Making a phone, checking the temperature
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

const Styles = styled.div``;
