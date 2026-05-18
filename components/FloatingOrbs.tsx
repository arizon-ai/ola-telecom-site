'use client';

import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1 - Green */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-60 h-60 rounded-full bg-accent-green opacity-10 blur-[100px]"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Orb 2 - Cyan */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-accent-cyan opacity-[0.08] blur-[120px]"
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Orb 3 - Magenta */}
      <motion.div
        className="absolute -bottom-[10%] left-[40%] w-72 h-72 rounded-full bg-accent-magenta opacity-[0.12] blur-[110px]"
        animate={{
          y: [0, -40, 0],
          x: [0, 50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
