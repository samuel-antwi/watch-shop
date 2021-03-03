import { useStateProvider } from 'context/stateProvider';
import graphcms from 'graphql/client';
import { SHOWCASE_STRAPS } from 'graphql/queries';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const StrapShowcase = () => {
  const { addToViewedItems } = useStateProvider();
  const { data, isError, isLoading } = useQuery(['strap'], async () => {
    const { products } = await graphcms.request(SHOWCASE_STRAPS, { slug: 'accessories' });
    return products;
  });

  const router = useRouter();

  if (isLoading) return null;

  return (
    <div className='bg-gray-800'>
      <div className='container mx-auto py-20'>
        <div className='py-10 max-w-4xl mx-auto space-y-4'>
          <h2 className='font-bold capitalize py-5 md:text-2xl text-gray-100 text-center tracking-widest'>
            style with different variesties of straps
          </h2>
          <p className='text-lg text-gray-100 text-center'>
            Carefully desined by our experts to be more reburst without any compromise
          </p>
        </div>
        <div className='md:grid grid-cols-4 gap-5'>
          {data.map((strap, index) => (
            <div key={index}>
              <Link href={`/strap/${strap.slug}`}>
                <a>
                  <Image
                    className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    src={strap.images[0].url}
                    width={500}
                    height={500}
                    priority
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className='pt-20 max-w-xs mx-auto'>
          <button
            onClick={() => router.push('/straps')}
            className='capitalize border py-2 w-full border-gray-100 rounded text-gray-100 tracking-wider font-medium hover:bg-gray-900 hover:text-gray-50'>
            View all straps
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrapShowcase;
