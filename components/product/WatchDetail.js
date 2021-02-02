import Link from 'next/link';
import Markdown from 'react-markdown';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState } from 'react';
import { useStateProvider } from 'context/stateProvider';

const WatchDetail = ({ product }) => {
  const { addToBasket } = useStateProvider();
  const [isHovered, setIsHovered] = useState(false);
  const {
    name,
    images,
    id,
    slug,
    description,
    instock,
    model,
    price,
    reviews,
  } = product;
  console.log(images);
  return (
    <div>
      <div className='md:grid md:grid-cols-7 lg:gap-10 gap-5'>
        <div className='col-span-1 pt-4 -mr-5 hidden md:block'>
          {images.map((image) => (
            <img
              className='w-16 shadow-xl mb-5'
              key={image.id}
              src={image.url}
              alt={name}
            />
          ))}
        </div>
        <div className='col-span-3'>
          <img src={images[0].url} alt={name} />
        </div>
        <div className='col-span-3 pt-4 lg:ml-5 ml-0'>
          <p className='md:text-lg tracking-wider text-gray-800 mb-5'>{name}</p>
          <p className='mb-2 font-semibold tracking-widest text-gray-800 text-lg'>
            £{price}.00
          </p>
          <div className='mb-3'>
            <Link href='/'>
              <a className='underline font-thin text-sm text-gray-700'>
                Free Delivery & Returns (Ts & Cs apply)
              </a>
            </Link>
          </div>
          {instock ? (
            <p className='text-green-600 mb-3'>In stock</p>
          ) : (
            <p className='text-red-600 mb-3'>Out of stock</p>
          )}
          <div>
            <Markdown className='mb-5' source={description.markdown} />
            <div className='flex items-center justify-between'>
              <button
                onClick={() => addToBasket(product)}
                className='btn_add_to_basket'>
                ADD TO BAG
              </button>
              <span className='saved-btn'>
                {isHovered ? (
                  <BsHeartFill className='' size={20} />
                ) : (
                  <BsHeart className='' size={20} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetail;
