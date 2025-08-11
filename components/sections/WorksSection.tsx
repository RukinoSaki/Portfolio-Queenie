'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import ImageOptimizer from '@/components/ImageOptimizer'
import { works, getWorksByCategory, getAllCategories, type Work } from '@/data/works'

export default function WorksSection() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  const categories = getAllCategories()
  const filteredWorks = getWorksByCategory(selectedCategory)

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-6">
              精选作品
            </h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto text-balance">
              每一个项目都是独特的故事，展现了设计的力量和美学的追求
            </p>
          </div>
        </ScrollReveal>

        {/* 分类过滤器 */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-800 text-white'
                    : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* 作品网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover-lift">
                  {/* 图片 */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageOptimizer
                      src={work.images.cover}
                      alt={work.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      overlay
                      onClick={() => setSelectedWork(work)}
                    />
                    
                    {/* 年份标签 */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-700">
                      {work.year}
                    </div>

                    {/* 特色标签 */}
                    {work.featured && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        精选
                      </div>
                    )}
                  </div>

                  {/* 内容 */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-accent-500 font-medium">
                          {work.category}
                        </span>
                        {work.client && (
                          <span className="text-xs text-primary-400">
                            {work.client}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-primary-800 mb-3">
                        {work.title}
                      </h3>
                      <p className="text-primary-600 text-sm leading-relaxed line-clamp-3">
                        {work.description}
                      </p>
                    </div>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {work.tags.length > 3 && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                          +{work.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* 项目信息 */}
                    {(work.duration || work.tools) && (
                      <div className="pt-3 border-t border-primary-100 text-xs text-primary-500">
                        {work.duration && (
                          <div className="flex items-center mb-1">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {work.duration}
                          </div>
                        )}
                        {work.tools && (
                          <div className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            {work.tools.slice(0, 2).join(', ')}
                            {work.tools.length > 2 && '...'}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 查看更多按钮 */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.button
              className="bg-transparent border-2 border-primary-300 text-primary-700 px-8 py-4 font-medium rounded-full hover:bg-primary-800 hover:text-white hover:border-primary-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看更多作品
            </motion.button>
          </div>
        </ScrollReveal>
      </div>

      {/* 作品详情模态框 */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* 关闭按钮 */}
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* 主图片 */}
                <div className="aspect-[16/10]">
                  <ImageOptimizer
                    src={selectedWork.images.cover}
                    alt={selectedWork.title}
                    width={1200}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 内容区域 */}
                <div className="p-8 space-y-8">
                  {/* 项目信息 */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-accent-500 font-medium">
                            {selectedWork.category}
                          </span>
                          <span className="text-primary-400">•</span>
                          <span className="text-primary-600">{selectedWork.year}</span>
                          {selectedWork.featured && (
                            <>
                              <span className="text-primary-400">•</span>
                              <span className="text-accent-500 text-sm font-medium">精选作品</span>
                            </>
                          )}
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-primary-800 mb-4">
                          {selectedWork.title}
                        </h3>
                        <p className="text-primary-600 text-lg leading-relaxed">
                          {selectedWork.description}
                        </p>
                      </div>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-3">
                        {selectedWork.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 项目详情 */}
                    <div className="space-y-6">
                      {selectedWork.client && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary-800 mb-2">客户</h4>
                          <p className="text-primary-600">{selectedWork.client}</p>
                        </div>
                      )}
                      
                      {selectedWork.duration && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary-800 mb-2">项目周期</h4>
                          <p className="text-primary-600">{selectedWork.duration}</p>
                        </div>
                      )}
                      
                      {selectedWork.tools && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary-800 mb-2">使用工具</h4>
                          <div className="space-y-1">
                            {selectedWork.tools.map((tool) => (
                              <div key={tool} className="text-primary-600 text-sm">
                                • {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 图片画廊 */}
                  {selectedWork.images.gallery && selectedWork.images.gallery.length > 0 && (
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-primary-800 mb-6">项目详情</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedWork.images.gallery.map((image, index) => (
                          <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                            <ImageOptimizer
                              src={image}
                              alt={`${selectedWork.title} 详情 ${index + 1}`}
                              width={600}
                              height={450}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
