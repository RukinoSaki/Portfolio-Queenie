'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // 3秒后重置状态
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: '邮箱',
      value: 'hello@designer.com',
      href: 'mailto:hello@designer.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: '电话',
      value: '+86 138 0013 8000',
      href: 'tel:+8613800138000'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: '位置',
      value: '北京, 中国',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'Behance',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.19.906.26 1.576.72 2.022 1.37.448.66.672 1.48.672 2.45 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.168-1.32.252-2.04.252H0V4.503h6.938z"/>
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.21c.693 1.454 1.109 3.077 1.13 4.79-1.524-.303-3.136-.394-4.794-.142.105-.248.2-.503.287-.764 2.042-.847 3.697-2.095 4.377-3.884z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.174-1.559l-.027.003c-.78-.95-1.248-2.165-1.248-3.494 0-3.036 2.461-5.497 5.497-5.497s5.497 2.461 5.497 5.497c0 3.036-2.461 5.497-5.497 5.497z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="asymmetric-grid gap-16">
          {/* 左侧 - 联系信息 */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-800">
                  让我们一起创造
                </h2>
                <div className="w-16 h-1 bg-accent-500"></div>
                <p className="text-xl text-primary-600 text-balance leading-relaxed">
                  有想法？有项目？或者只是想聊聊设计？
                  我很乐意听到您的声音。
                </p>
              </div>
            </ScrollReveal>

            {/* 联系方式 */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.label} direction="left" delay={index * 0.1}>
                  <motion.a
                    href={info.href}
                    className="flex items-center space-x-4 text-primary-600 hover:text-primary-800 transition-colors duration-200 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-primary-500 font-medium">
                        {info.label}
                      </div>
                      <div className="font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>

            {/* 社交媒体 */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-800">
                  关注我的作品
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 hover:text-accent-500 hover:bg-accent-50 transition-all duration-200 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 右侧 - 联系表单 */}
          <div>
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 bg-white"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 bg-white"
                    placeholder="项目咨询 / 合作邀请 / 其他"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    消息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 bg-white resize-none"
                    placeholder="请详细描述您的项目需求或想法..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 font-medium rounded-lg transition-all duration-200 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-primary-800 text-white hover:bg-primary-900'
                  } disabled:opacity-70`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>发送中...</span>
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>发送成功！</span>
                    </div>
                  ) : (
                    '发送消息'
                  )}
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
