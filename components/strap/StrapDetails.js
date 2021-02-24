import Link from 'next/link';
import Markdown from 'react-markdown';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState } from 'react';
import { useStateProvider } from 'context/stateProvider';
import 'react-slideshow-image/dist/styles.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';

const StrapDetails = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { addToBasket, isSaved, saveForLater, increase, inBasket } = useStateProvider();

  const { name, images, id, slug, description, instock, model, price, reviews } = product;

  return (
    <div className='md:grid md:grid-cols-6 lg:gap-10 gap-5 pt-10'>
      <div className='col-span-3 md:mr-10'>
        <div className='inline-flex items-center'>
          <Image
            className=''
            src={images[imageIndex].url}
            alt={name}
            width={700}
            height={700}
            priority
          />
        </div>
      </div>
      <div className='col-span-3 pt-4 lg:ml-5 ml-0'>
        <h2 className='mb-5 font-bold tracking-wider'>
          Apple Watch | <span>{model}</span>
        </h2>
        <p className='md:text-lg tracking-wider text-gray-800 mb-5'>{name}</p>
        <p className='mb-2 font-semibold tracking-widest text-gray-800 text-lg'>£{price}.00</p>
        <div className='mb-3'>
          <Link href='/'>
            <a className='underline font-thin text-sm text-gray-700'>
              Free Delivery & Returns (Ts & Cs apply)
            </a>
          </Link>
        </div>
        {instock ? (
          <p className='text-green-600 mb-3 text-lg'>In stock</p>
        ) : (
          <p className='text-red-600 mb-3 text-lg'>Out of stock</p>
        )}
        <div className='flex items-center justify-between'>
          <button
            disabled={!instock}
            onClick={() => {
              if (inBasket(id)) {
                return increase(id);
              } else {
                return addToBasket(product);
              }
            }}
            className={`${instock ? 'btn_add_to_basket' : 'detail-btn_out-of-stock'}`}>
            {instock ? '  ADD TO BAG' : 'OUT OF STOCK'}
          </button>
          <button
            onClick={() => saveForLater(product)}
            disabled={isSaved(id)}
            className='saved-btn'>
            {isSaved(id) ? (
              <BsHeartFill className='' size={20} />
            ) : (
              <BsHeart className='' size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrapDetails;
