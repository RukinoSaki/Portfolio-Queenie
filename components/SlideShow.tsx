'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageOptimizer from './ImageOptimizer'

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

interface SlideShowProps {
  slides: Slide[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export default function SlideShow({
  slides,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true
}: SlideShowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [currentSlide, autoPlay, interval])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg bg-primary-100">
      {/* 幻灯片 */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide()
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide()
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <ImageOptimizer
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
            
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* 文字内容 */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.h3
                className="text-2xl md:text-3xl font-serif font-bold mb-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                className="text-white/90 text-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 控制按钮 */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* 指示器 */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}

      {/* 进度条 */}
      {autoPlay && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-accent-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: interval / 1000, ease: 'linear' }}
            key={currentSlide}
          />
        </div>
      )}
    </div>
  )
}
