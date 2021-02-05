import Image from 'next/image';
import { BsTrash } from 'react-icons/bs';
import { useStateProvider } from 'context/stateProvider';
import { useRouter, UseRouter } from 'next/router';
import Link from 'next/link';
import RemoveFromBaketFeedback from './RemoveFromBaketFeedback';

const MiniBasketList = () => {
  const { setMiniBasket, removeFromBasket } = useStateProvider();

  const { basket } = useStateProvider();
  console.log(basket);
  return basket.length !== 0 ? (
    <div className='max-h-100 overflow-scroll'>
      <RemoveFromBaketFeedback />
      {basket?.map(({ product, quantity }) => {
        const { name, images, price, id, slug } = product;
        return (
          <Link href={`/product/${slug}`} key={id}>
            <a>
              <div className='pt-3 grid grid-cols-5 max-w-sm border-b-2 cursor-pointer'>
                <div className='col-span-1'>
                  <Image src={images[0].url} width={130} height={130} />
                </div>
                <div className='col-span-4 px-3'>
                  <p className='font-semibold text-gray-800 mb-3 tracking-wide'>
                    £{price}.00
                  </p>
                  <p className='text-gray-700 mb-6'>{name}</p>
                  <div className='flex justify-between items-center mb-3'>
                    <p>Qty: {quantity}</p>
                    <button type='button' onClick={() => removeFromBasket(id)}>
                      <BsTrash
                        className=' hover:text-red-500 cursor-default'
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  ) : null;
};

export default MiniBasketList;
