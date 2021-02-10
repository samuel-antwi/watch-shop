import { sumItems } from 'reducer/productReducer';

const SubTotal = () => {
  return (
    <div className=' bg-gray-200 border-b border-t border-gray-300 px-3 py-6'>
      <div className='flex justify-between items-center text-lg text-gray-800'>
        <p>Sub-total</p>
        <p>£200</p>
      </div>
    </div>
  );
};

export default SubTotal;
