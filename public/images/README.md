# 图片文件夹说明

## 📁 文件夹结构

### portfolio/ - 作品图片
每个项目都有独立的文件夹，包含：
- cover.jpg - 封面图 (600x400px 推荐)
- detail-1.jpg, detail-2.jpg, detail-3.jpg - 详情图 (800x600px 推荐)

### profile/ - 个人相关图片
- avatar.jpg - 头像 (400x400px)
- about-me.jpg - 关于页面图片 (800x600px)

### ui/ - UI相关图片
- logo.svg - 网站Logo
- hero-bg.jpg - 首页背景图

### icons/ - 图标文件
- social-icons/ - 社交媒体图标
- skill-icons/ - 技能图标

## 📸 图片规格建议

### 作品封面图
- 尺寸: 600x400px (3:2 比例)
- 格式: JPG, PNG, WebP
- 大小: < 500KB

### 作品详情图
- 尺寸: 800x600px 或更高
- 格式: JPG, PNG, WebP
- 大小: < 1MB

### 头像
- 尺寸: 400x400px (1:1 比例)
- 格式: JPG, PNG, WebP
- 大小: < 200KB

## 🎯 添加新作品图片步骤

1. 在 portfolio/ 下创建新项目文件夹
2. 添加 cover.jpg 作为封面图
3. 添加 detail-*.jpg 作为详情图
4. 在 data/works.ts 中添加对应的数据项
5. 图片路径格式: /images/portfolio/项目文件夹名/图片名.jpg

## 🔧 图片优化建议

- 使用 WebP 格式可以减小文件大小
- 压缩图片以提高加载速度
- 为不同设备准备不同尺寸的图片
- 使用有意义的文件名，便于管理
