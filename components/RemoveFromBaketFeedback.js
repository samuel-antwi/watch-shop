import { motion } from 'framer-motion';

const RemoveFromBaketFeedback = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className='bg-gray-100 p-10'>
        <p className='flex justify-center items-center w-full justify-items-center inset-0'>
          Item deleted
        </p>
      </motion.div>
    </div>
  );
};

export default RemoveFromBaketFeedback;
