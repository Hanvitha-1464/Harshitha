import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { width, height } = useWindowSize();

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E30B5C] to-[#FF69B4] flex flex-col">
      <Confetti width={width} height={height} />
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Happy Birthday Akka!! 🎉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-white mb-8 max-w-xl"
        >
          This is your special surprise! Explore each section to find sweet memories and wishes from everyone who loves you 💖
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { to: '/memory', label: '📸 Memory Lane' },
            { to: '/letters', label: '✉️ Open ...' },
            { to: '/wishes', label: '🗣️ Wish Wall' },
          ].map((item, i) => (
            <motion.div
              key={item.to}
              custom={i}
              variants={buttonVariants}
            >
              <Link
                to={item.to}
                className="bg-[#FF6F91] hover:bg-[#FF4E80] text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default HomePage;
