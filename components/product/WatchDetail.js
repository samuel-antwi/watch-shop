import Link from 'next/link';
import Markdown from 'react-markdown';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState } from 'react';
import { useStateProvider } from 'context/stateProvider';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';

const WatchDetail = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { addToBasket, isSaved, saveForLater } = useStateProvider();

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
  return (
    <div className='md:grid md:grid-cols-7 lg:gap-10 gap-5'>
      <div className='col-span-1 pt-4 -mr-5 hidden md:block'>
        {images.map((image, index) => (
          <div key={image.id}>
            <button onClick={() => setImageIndex(index)}>
              <img className='w-16  mb-5' src={image.url} alt={name} />
            </button>
          </div>
        ))}
      </div>
      <div className='col-span-3 md:mr-10'>
        <div className='inline-flex items-center'>
          <PrevArrow imageIndex={imageIndex} setImageIndex={setImageIndex} />
          <Image
            src={images[imageIndex].url}
            alt={name}
            width={500}
            height={500}
            priority={true}
          />
          <NextArrow imageIndex={imageIndex} setImageIndex={setImageIndex} />
        </div>
      </div>
      <div className='col-span-3 pt-4 lg:ml-5 ml-0'>
        <h2 className='mb-5 font-bold tracking-wider'>
          Apple Watch | <span>{model}</span>
        </h2>
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
        <Markdown
          className='mb-5 tracking-wide'
          source={description.markdown}
        />
        <div className='flex items-center justify-between'>
          <button
            disabled={!instock}
            onClick={() => addToBasket(product)}
            className={`${
              instock ? 'btn_add_to_basket' : 'detail-btn_out-of-stock'
            }`}>
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

export default WatchDetail;

export const NextArrow = ({ imageIndex, setImageIndex }) => {
  return (
    <button
      onClick={() => setImageIndex((prev) => prev + 1)}
      className=''
      disabled={imageIndex === 2}>
      <BsChevronRight
        className={` ${
          imageIndex === 2 ? 'text-gray-400 cursor-default' : 'text-gray-900'
        }`}
        size={30}
      />
    </button>
  );
};
export const PrevArrow = ({ imageIndex, setImageIndex }) => {
  return (
    <button
      onClick={() => setImageIndex((prev) => prev - 1)}
      className=''
      disabled={imageIndex === 0}>
      <BsChevronLeft
        className={`${
          imageIndex === 0 ? 'text-gray-400 cursor-default' : 'text-gray-900'
        }`}
        size={30}
      />
    </button>
  );
};
