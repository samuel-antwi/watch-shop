import { useState, useEffect } from 'react';

const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight;
      setBottom(isBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return bottom;
};

export default usePageBottom;
