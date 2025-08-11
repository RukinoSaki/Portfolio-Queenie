'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageOptimizerProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onClick?: () => void
  overlay?: boolean
}

export default function ImageOptimizer({
  src,
  alt,
  width = 600,
  height = 400,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onClick,
  overlay = false,
}: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [clientBlurDataURL, setClientBlurDataURL] = useState<string>('')

  // 在客户端生成模糊占位符
  useEffect(() => {
    if (typeof window !== 'undefined' && !blurDataURL) {
      const generateBlurDataURL = (w: number, h: number) => {
        try {
          const canvas = document.createElement('canvas')
          canvas.width = w
          canvas.height = h
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.fillStyle = '#f3f4f6'
            ctx.fillRect(0, 0, w, h)
          }
          return canvas.toDataURL()
        } catch (error) {
          console.warn('无法生成占位符:', error)
          return ''
        }
      }
      
      setClientBlurDataURL(generateBlurDataURL(width, height))
    }
  }, [width, height, blurDataURL])

  const handleLoad = () => {
    setIsLoaded(true)
    setIsError(false)
  }

  const handleError = () => {
    setIsError(true)
    setIsLoaded(false)
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={onClick ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* 加载状态 */}
      <AnimatePresence>
        {!isLoaded && !isError && (
          <motion.div
            className="absolute inset-0 bg-primary-100 flex items-center justify-center z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 border-2 border-primary-300 border-t-accent-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 错误状态 */}
      {isError && (
        <motion.div
          className="absolute inset-0 bg-primary-100 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-primary-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">图片加载失败</p>
          </div>
        </motion.div>
      )}

      {/* 图片 */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL || clientBlurDataURL || undefined}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${
          onClick ? 'cursor-pointer' : ''
        }`}
        onClick={onClick}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* 悬停遮罩 */}
      {overlay && onClick && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        >
          <motion.div
            className="text-white text-center"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium">查看详情</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
