import { motion } from 'framer-motion';
import SubTotal from '../SubTotal';
import MiniBasketButtons from './MiniBasketButtons';
import MiniBasketList from './MiniBasketList';
import MiniBasketHeader from './MiniBasketHeader';
import { useStateProvider } from 'context/stateProvider';

const MiniBasket = () => {
  const { basket, setMiniBasket } = useStateProvider();
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className='absolute right-5 top-20 z-20 bg-white'>
      {basket.length > 0 ? (
        <div
          onMouseLeave={() => setMiniBasket(false)}
          className=' border border-gray-300'>
          <MiniBasketHeader />
          <MiniBasketList />
          <SubTotal />
          <MiniBasketButtons />
        </div>
      ) : null}
    </motion.div>
  );
};

export default MiniBasket;
