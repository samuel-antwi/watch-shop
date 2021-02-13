import { useState, useEffect } from 'react';

const usePageBottom = () => {
  const [isBottomOfPage, setIsBottomOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight;
      setIsBottomOfPage(isBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isBottomOfPage;
};

export default usePageBottom;
