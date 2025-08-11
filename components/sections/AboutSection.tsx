'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutSection() {
  const skills = [
    { name: '品牌设计', level: 95 },
    { name: 'UI/UX设计', level: 90 },
    { name: '插画设计', level: 85 },
    { name: '动态图形', level: 80 },
    { name: '摄影', level: 75 },
  ]

  return (
    <section id="about" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="asymmetric-grid items-start gap-16">
          {/* 左侧 - 个人介绍 */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-800">
                  关于我
                </h2>
                <div className="w-16 h-1 bg-accent-500"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6 text-primary-600 text-lg leading-relaxed">
                <p>
                  我是一名专注于极简主义美学的视觉设计师，拥有超过5年的设计经验。
                  我相信最好的设计往往是最简单的，通过减法而非加法来创造出强有力的视觉冲击。
                </p>
                <p>
                  我的设计哲学建立在对细节的极致追求和对用户体验的深度理解之上。
                  每一个项目都是一次探索的旅程，寻找最纯粹、最有效的表达方式。
                </p>
                <p>
                  除了视觉设计，我还热爱摄影和当代艺术，这些爱好不断地为我的设计工作注入新的灵感和视角。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['Adobe Creative Suite', 'Figma', 'Sketch', 'Principle', 'After Effects'].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-4 py-2 bg-white border border-primary-200 text-primary-700 text-sm font-medium rounded-full hover-lift"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 右侧 - 技能展示 */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-8">
                专业技能
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} direction="right" delay={index * 0.1}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary-700">{skill.name}</span>
                      <span className="text-sm text-primary-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-500 to-primary-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 数据统计 */}
            <ScrollReveal direction="right" delay={0.6}>
              <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-primary-200">
                {[
                  { number: '50+', label: '完成项目' },
                  { number: '5+', label: '设计经验' },
                  { number: '20+', label: '合作客户' },
                  { number: '100%', label: '客户满意度' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-accent-500 font-serif">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
