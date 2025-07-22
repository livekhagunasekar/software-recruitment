import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      //onComplete();
    }, 2500); // Change delay as needed

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 text-blue-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Software Recruitment Co.
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-gray-300 mb-8"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Grow with the Flow
          </motion.p>
          <motion.div
            className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin-slow"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
