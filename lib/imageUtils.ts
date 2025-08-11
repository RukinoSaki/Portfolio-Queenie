// 图片工具函数
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  quality: number = 80
): string => {
  // 对于本地图片，Next.js Image 组件会自动优化
  return src
}

// 生成占位符图片的数据URL
export const generatePlaceholderDataURL = (width: number, height: number): string => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // 创建渐变背景
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f3f4f6')
    gradient.addColorStop(1, '#e5e7eb')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    
    // 添加加载文字
    ctx.fillStyle = '#9ca3af'
    ctx.font = '16px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('加载中...', width / 2, height / 2)
  }
  
  return canvas.toDataURL()
}

// 预加载图片
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// 批量预加载图片
export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)))
  } catch (error) {
    console.warn('部分图片预加载失败:', error)
  }
}
