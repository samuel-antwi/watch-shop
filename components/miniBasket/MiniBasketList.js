import Image from 'next/image';
import { BsTrash } from 'react-icons/bs';
import { useStateProvider } from 'context/stateProvider';
import { useRouter, UseRouter } from 'next/router';
import Link from 'next/link';
import RemoveFromBaketFeedback from '../RemoveFromBaketFeedback';

const MiniBasketList = () => {
  const { setMiniBasket, removeFromBasket } = useStateProvider();

  const { basket } = useStateProvider();
  return basket.length !== 0 ? (
    <div className='max-h-100 overflow-scroll'>
      {basket?.map((product) => {
        const { name, images, price, id, slug, quantity } = product;
        return (
          <div key={id} className='pt-3 grid grid-cols-5 max-w-sm border-b-2'>
            <div className='col-span-1'>
              <Link href={`/product/${slug}`}>
                <a>
                  <Image src={images[0].url} width={130} height={130} />
                </a>
              </Link>
            </div>
            <div className='col-span-4 px-3'>
              <p className='font-semibold text-gray-800 mb-3 tracking-wide'>£{price}.00</p>
              <Link href={`/product/${slug}`}>
                <a className='text-gray-700 mb-6 hover:text-blue-400'>{name}</a>
              </Link>
              <div className='flex justify-between items-center mb-3'>
                <p>Qty: {quantity}</p>
                <button type='button' onClick={() => removeFromBasket(id)}>
                  <BsTrash className=' hover:text-red-500 cursor-default' size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default MiniBasketList;
