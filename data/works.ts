// 作品数据管理文件
export interface Work {
  id: number
  title: string
  category: string
  description: string
  images: {
    cover: string           // 封面图
    gallery?: string[]      // 作品详情图集（可选）
  }
  tags: string[]
  year: string
  featured?: boolean
  client?: string
  duration?: string
  tools?: string[]
}

// 作品数据 - 使用本地图片路径
export const works: Work[] = [
  {
    id: 1,
    title: '极简品牌设计',
    category: '品牌设计',
    description: '为科技初创公司设计的极简主义品牌识别系统，体现了现代性和创新精神。通过简洁的线条和现代的色彩搭配，传达出品牌的专业性和创新理念。',
    images: {
      cover: '/images/portfolio/brand-design-1/cover.png',
      gallery: [
        '/images/portfolio/brand-design-1/detail-1.jpg',
        '/images/portfolio/brand-design-1/detail-2.jpg',
        '/images/portfolio/brand-design-1/detail-3.jpg'
      ]
    },
    tags: ['品牌设计', 'Logo设计', '视觉识别'],
    year: '2024',
    featured: true,
    client: '科技初创公司',
    duration: '2个月',
    tools: ['Adobe Illustrator', 'Figma']
  },
  {
    id: 2,
    title: 'UI设计系统',
    category: 'UI/UX',
    description: '为移动应用设计的一套完整的UI组件库，注重可用性和美观性的平衡。建立了统一的设计语言和交互规范。',
    images: {
      cover: '/images/portfolio/ui-system-1/cover.jpg',
      gallery: [
        '/images/portfolio/ui-system-1/components.jpg',
        '/images/portfolio/ui-system-1/mobile-screens.jpg',
        '/images/portfolio/ui-system-1/design-tokens.jpg'
      ]
    },
    tags: ['UI设计', '设计系统', '移动端'],
    year: '2024',
    featured: true,
    client: '金融科技公司',
    duration: '3个月',
    tools: ['Figma', 'Sketch', 'Principle']
  },
  {
    id: 3,
    title: '概念海报设计',
    category: '平面设计',
    description: '探索typography与几何形状结合的可能性，创造视觉冲击力。这组海报展示了现代设计的无限可能。',
    images: {
      cover: '/images/portfolio/poster-design-1/cover.jpg',
      gallery: [
        '/images/portfolio/poster-design-1/poster-1.jpg',
        '/images/portfolio/poster-design-1/poster-2.jpg',
        '/images/portfolio/poster-design-1/poster-3.jpg'
      ]
    },
    tags: ['海报设计', '排版', '概念设计'],
    year: '2023',
    client: '艺术展览',
    duration: '1个月',
    tools: ['Adobe InDesign', 'Adobe Photoshop']
  },
  {
    id: 4,
    title: '产品包装设计',
    category: '包装设计',
    description: '环保理念的产品包装，使用可持续材料和极简设计语言。体现品牌对环境保护的承诺。',
    images: {
      cover: '/images/portfolio/packaging-1/cover.jpg',
      gallery: [
        '/images/portfolio/packaging-1/box-design.jpg',
        '/images/portfolio/packaging-1/label-design.jpg',
        '/images/portfolio/packaging-1/mockup.jpg'
      ]
    },
    tags: ['包装设计', '环保', '产品设计'],
    year: '2023',
    client: '有机食品品牌',
    duration: '6周',
    tools: ['Adobe Illustrator', '3D建模']
  },
  {
    id: 5,
    title: '网站重设计',
    category: 'UI/UX',
    description: '为艺术画廊重新设计的网站，突出艺术作品展示和用户体验。采用极简主义设计理念。',
    images: {
      cover: '/images/portfolio/website-redesign-1/cover.jpg',
      gallery: [
        '/images/portfolio/website-redesign-1/homepage.jpg',
        '/images/portfolio/website-redesign-1/gallery-page.jpg',
        '/images/portfolio/website-redesign-1/mobile-view.jpg'
      ]
    },
    tags: ['网站设计', 'UX设计', '艺术'],
    year: '2024',
    client: '当代艺术画廊',
    duration: '2.5个月',
    tools: ['Figma', 'Adobe XD', 'Webflow']
  },
  {
    id: 6,
    title: '插画系列',
    category: '插画',
    description: '以城市生活为主题的插画系列，探索现代人的情感状态。通过色彩和构图表达内心世界。',
    images: {
      cover: '/images/portfolio/illustration-1/cover.jpg',
      gallery: [
        '/images/portfolio/illustration-1/city-life-1.jpg',
        '/images/portfolio/illustration-1/city-life-2.jpg',
        '/images/portfolio/illustration-1/city-life-3.jpg'
      ]
    },
    tags: ['插画', '概念设计', '情感表达'],
    year: '2023',
    client: '个人项目',
    duration: '4周',
    tools: ['Procreate', 'Adobe Illustrator']
  }
]

// 辅助函数
export const getWorkById = (id: number): Work | undefined => {
  return works.find(work => work.id === id)
}

export const getFeaturedWorks = (): Work[] => {
  return works.filter(work => work.featured)
}

export const getWorksByCategory = (category: string): Work[] => {
  if (category === '全部') return works
  return works.filter(work => work.category === category)
}

export const getAllCategories = (): string[] => {
  const categories = ['全部', ...new Set(works.map(work => work.category))]
  return categories
}
