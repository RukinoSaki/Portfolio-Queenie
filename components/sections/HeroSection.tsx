'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = '视觉设计师'
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)
    
    return () => clearInterval(timer)
  }, [])

  // 安全的滚动函数
  const scrollToSection = (selector: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(selector)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="asymmetric-grid items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-medium text-primary-500 tracking-wider uppercase"
                >
                  Hello, I'm
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-800 leading-tight">
                  <span className="block">{displayText}</span>
                  <motion.span
                    className="inline-block w-1 h-16 md:h-20 bg-accent-500 ml-2"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </h1>
                
                <p className="text-xl text-primary-600 max-w-lg text-balance leading-relaxed">
                  专注于创造简洁而有力的视觉体验，通过设计传达深层的情感与意义。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex space-x-6">
                <motion.button
                  className="bg-primary-800 text-white px-8 py-4 font-medium hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#works')}
                >
                  查看作品
                </motion.button>
                
                <motion.button
                  className="border border-primary-300 text-primary-700 px-8 py-4 font-medium hover-lift"
                  whileHover={{ scale: 1.05, borderColor: '#495057' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                >
                  联系我
                </motion.button>
              </div>
            </ScrollReveal>
          </div>

          {/* 右侧装饰元素 */}
          <ScrollReveal direction="right" delay={0.6}>
            <div className="relative h-96 md:h-[500px]">
              {/* 主要几何形状 */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 border-2 border-accent-500 opacity-20"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="absolute bottom-32 left-16 w-24 h-24 bg-primary-200 opacity-30"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-48 h-48 border border-primary-300 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full opacity-80" />
                </div>
              </motion.div>
              
              {/* 小装饰元素 */}
              <motion.div
                className="absolute top-10 left-10 w-3 h-3 bg-accent-500 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute bottom-10 right-10 w-2 h-16 bg-primary-400 opacity-40"
                animate={{
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* 滚动指示器 */}
        <ScrollReveal delay={1}>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('#about')}
          >
            <div className="flex flex-col items-center space-y-2 text-primary-400">
              <span className="text-sm font-medium">向下滚动</span>
              <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-primary-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
