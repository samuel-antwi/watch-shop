import { motion } from 'framer-motion';
import { useState } from 'react';

const RemoveFromBaketFeedback = () => {
  const [isRemoved] = useState(false);
  return (
    <div>
      {isRemoved && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className='bg-gray-100 p-10'>
          <p className='flex justify-center items-center justify-items-center inset-0'>
            Deleted
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default RemoveFromBaketFeedback;
