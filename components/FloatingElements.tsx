'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 浮动圆形元素 */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-accent-500 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-2 h-2 bg-primary-400 rounded-full opacity-40"
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-4 h-4 border border-accent-500 opacity-20"
        animate={{
          rotate: [0, 360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-10 w-6 h-1 bg-primary-300 opacity-25"
        animate={{
          scaleX: [1, 1.5, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* 几何线条 */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-12 h-12 border-l border-t border-primary-200 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
