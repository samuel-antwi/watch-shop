import graphcms from 'graphql/client';
import { SHOWCASE_WATCHES } from 'graphql/queries';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const WatchShowcase = () => {
  const router = useRouter();
  const { data, isError, isLoading } = useQuery(['watch'], async () => {
    const { products } = await graphcms.request(SHOWCASE_WATCHES, { slug: 'watch' });
    return products;
  });

  if (isLoading) return null;

  return (
    <div>
      <div className='container mx-auto py-20'>
        <div className='pt-10 mb-20 max-w-4xl mx-auto space-y-4'>
          <h2 className='font-bold py-5 md:text-2xl text-gray-400'>ABOUT OUR SMART WATCHES</h2>
          <h1 className='md:text-4xl font-bold text-gray-800'>
            <span className='text-purple-700'>Modern</span>, Improved Design and Best{' '}
            <span className='text-purple-700'>Perfomance</span>
          </h1>
          <p className='text-lg text-gray-800'>
            Carefully desined by our experts to be more reburst without any compromise
          </p>
        </div>
        <div className='md:grid grid-cols-4 gap-5'>
          {data.map((watch, index) => (
            <div key={index}>
              <Link href={`/watch/${watch.slug}`}>
                <a>
                  <Image
                    className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                    src={watch.images[0].url}
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
            onClick={() => router.push('/watches')}
            className='capitalize w-full border py-2 px-5 border-gray-600 rounded tracking-wider font-medium hover:bg-gray-900 hover:text-gray-50'>
            View all watches
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchShowcase;
