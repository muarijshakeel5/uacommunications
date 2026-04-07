'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const velocityWords = [
  { text: 'SPEED.', className: 'text-gray-900', delay: 0 },
  { text: 'SIGNAL.', className: 'text-gray-900', delay: 0.5 },
  { text: 'REVENUE.', className: 'text-red-600', delay: 1.0 },
];

const communicationsLetters = 'COMMUNICATIONS'.split('');

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 4300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-white pointer-events-none"
      style={{ perspective: '1000px' }}
      initial={{ y: 0 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {velocityWords.map((word) => (
          <motion.div
            key={word.text}
            className={`pointer-events-none absolute inset-0 flex items-center justify-center font-display text-4xl font-semibold tracking-[0.24em] sm:text-6xl lg:text-7xl ${word.className}`}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [1, 1.04, 1.1, 1.08] }}
            transition={{
              delay: word.delay,
              duration: 0.5,
              times: [0, 0.18, 0.82, 1],
              ease: 'easeInOut',
            }}
          >
            {word.text}
          </motion.div>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            className="h-2 w-64 rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.45)] md:h-3 md:w-96"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.3,
              ease: 'easeOut',
            }}
          />

          <motion.div
            className="mt-3 overflow-hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{
              delay: 1.92,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="font-display text-7xl font-bold leading-none tracking-tight text-red-600 md:text-[180px]">
              UA
            </div>
          </motion.div>

          <motion.div
            className="mt-4 flex flex-nowrap items-center justify-center gap-x-0.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 md:mt-8 md:gap-x-1 md:text-3xl md:tracking-[0.8em]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 2.48,
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {communicationsLetters.map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.24,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
