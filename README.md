# 极简主义设计师作品集网站

一个使用 Next.js 构建的现代化、极简主义风格的视觉设计师作品集网站。

## ✨ 特性

- 🎨 **极简主义设计** - 简洁而优雅的用户界面
- 📱 **响应式布局** - 在所有设备上完美展现
- ⚡ **高性能** - 使用 Next.js 和图片优化技术
- 🌊 **流畅动画** - Framer Motion 驱动的交互动画
- 🎯 **非对称布局** - 符合现代设计趋势
- 🖼️ **智能图片管理** - 自动优化和懒加载
- 📬 **联系表单** - 集成的联系方式和表单

## 🛠️ 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **语言**: TypeScript
- **图片优化**: Next.js Image
- **字体**: Inter & Playfair Display

## 🚀 快速开始

### 安装依赖

\`\`\`bash
npm install
# 或者
yarn install
\`\`\`

### 运行开发服务器

\`\`\`bash
npm run dev
# 或者
yarn dev
\`\`\`

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 项目结构

\`\`\`
portfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── sections/          # 页面区块组件
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorksSection.tsx
│   │   └── ContactSection.tsx
│   ├── Navigation.tsx     # 导航组件
│   ├── ScrollReveal.tsx   # 滚动动画组件
│   ├── ImageOptimizer.tsx # 图片优化组件
│   ├── SlideShow.tsx      # 幻灯片组件
│   └── FloatingElements.tsx # 浮动装饰元素
├── public/                # 静态资源
└── ...配置文件
\`\`\`

## 🎨 设计特点

### 极简主义美学
- 大量留白空间
- 简洁的色彩搭配
- 优雅的字体组合

### 非对称布局
- 黄金比例网格系统
- 动态的视觉层次
- 引导用户视线流

### 动画效果
- 滚动触发动画
- 微交互反馈
- 流畅的页面过渡

## 🔧 自定义配置

### 修改颜色主题

在 `tailwind.config.js` 中调整颜色配置：

\`\`\`javascript
colors: {
  'primary': {
    // 主色调配置
  },
  'accent': {
    // 强调色配置
  }
}
\`\`\`

### 添加新的作品

在 `components/sections/WorksSection.tsx` 中的 `works` 数组中添加新项目：

\`\`\`typescript
const works = [
  {
    id: 1,
    title: '项目标题',
    category: '项目分类',
    description: '项目描述',
    image: '图片路径',
    tags: ['标签1', '标签2'],
    year: '2024'
  }
  // 添加更多项目...
]
\`\`\`

### 修改个人信息

在各个组件中找到相应的文本内容进行修改：
- `HeroSection.tsx` - 主标题和介绍
- `AboutSection.tsx` - 个人简介和技能
- `ContactSection.tsx` - 联系信息

## 📱 响应式设计

网站采用移动优先的设计方法，在以下断点进行优化：

- **移动端**: < 768px
- **平板**: 768px - 1024px  
- **桌面端**: > 1024px

## ⚡ 性能优化

- **图片优化**: 使用 Next.js Image 组件自动优化
- **懒加载**: 图片和组件按需加载
- **代码分割**: 自动的路由级代码分割
- **压缩**: 生产环境自动压缩资源

## 🌐 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

项目兼容任何支持 Node.js 的托管平台：
- Netlify
- Railway
- Heroku
- 等等

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题或建议，请联系：
- 邮箱: hello@designer.com
- 网站: [作品集网站](https://your-portfolio.com)
