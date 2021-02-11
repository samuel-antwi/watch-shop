import { useStateProvider } from 'context/stateProvider';
import { sumItems } from 'reducer/productReducer';

const SubTotal = () => {
  const { total } = useStateProvider();
  return (
    <div className=' bg-gray-200 border-b border-t border-gray-300 px-3 py-6'>
      <div className='flex justify-between font-semibold items-center text-lg text-gray-800'>
        <p>Sub-total</p>
        <p className=''>£{total}</p>
      </div>
    </div>
  );
};

export default SubTotal;
