import { VscChromeClose } from 'react-icons/vsc';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useStateProvider } from 'context/stateProvider';

const MiniBasketHeader = () => {
  const { basket, durationNotification, setMiniBasket } = useStateProvider();
  return (
    <div>
      <div className='bg-gray-200'>
        <div className='flex justify-between p-3 items-center'>
          <p className='font-bold text-gray-600'>
            My Bag,
            {basket.length <= 1 ? (
              <span className='font-normal ml-2'>1 item</span>
            ) : (
              <span className='font-normal ml-2'>{basket.length} items</span>
            )}
          </p>
          <button onClick={() => setMiniBasket(false)}>
            <VscChromeClose size={25} />
          </button>
        </div>
      </div>
      {durationNotification && (
        <div className='flex items-center p-2 bg-green-100'>
          <IoIosCheckmarkCircleOutline size={20} className=' text-green-700' />
          <p className=' text-gray-700 ml-3'>
            It's in the bag - We'll hold it for 2 hours
          </p>
        </div>
      )}
    </div>
  );
};

export default MiniBasketHeader;
