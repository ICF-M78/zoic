# 字觉（zoic）

<div align="center">
  <img src="public/logo.png" alt="字觉 Logo" width="200"/>
  <br/>
  <p>一个优雅的文字壁纸生成器</p>
  <p>
    <a href="http://42.193.236.221/zoic/" target="_blank">在线演示</a>
  </p>
</div>

## ✨ 特性

- 🎨 根据文字内容生成精美壁纸
- 🎯 丰富的自定义选项
  - 文字颜色调整
  - 文字大小调整
  - 多种字体选择
  - 背景颜色自定义
- 🖥️ 简洁直观的用户界面
  - 悬浮式设置面板
  - 全屏展示模式
  - 响应式设计

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0

### 安装

```bash
# 克隆项目
git clone https://github.com/yourusername/zoic.git

# 进入项目目录
cd zoic

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 🛠️ 技术栈

- [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [SASS](https://sass-lang.com/) - CSS 预处理器
- [UnoCSS](https://unocss.dev/) - 即时原子化 CSS 引擎
- [Naive UI](https://www.naiveui.com/) - Vue 3 组件库
- [Pinia](https://pinia.vuejs.org/) - Vue 的状态管理库
- [@vicons/carbon](https://www.xicons.org/) - 图标库

## 📁 项目结构

```
zoic/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 项目资源文件
│   ├── cmpts/          # 组件目录
│   ├── composables/    # 组合式函数
│   ├── router/         # 路由配置
│   ├── stores/         # 状态管理
│   ├── styles/         # 全局样式
│   ├── types/          # TypeScript 类型定义
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   └── main.ts         # 入口文件
├── .env                # 环境变量
├── .env.development    # 开发环境变量
├── .env.production     # 生产环境变量
├── .prettierrc.json    # Prettier 配置
├── index.html          # HTML 模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 🎯 开发规范

### 组件开发规范

1. 组件目录统一使用 `cmpts` 命名
2. 使用 TypeScript 进行开发
3. 采用 Vue 3 组合式 API 和 `<script setup>` 语法
4. 组件模板结构：

### 代码风格

- 使用 Prettier 进行代码格式化
- 遵循 ESLint 规则
- 使用 TypeScript 类型注解
- 保持代码注释清晰

## 🔧 环境配置

### 开发环境

```bash
# 开发服务器配置
VITE_APP_BASE_URL="/dev"
```

### 生产环境

```bash
# 生产环境配置
VITE_APP_BASE_URL="/api-proxy"
```

## 📝 构建部署

### 构建脚本

```bash
# 构建项目
pnpm build

# 压缩项目文件
zip -r zoic-view.zip ./zoic

# 移动压缩文件到下载目录
mv zoic-view.zip /Users/wujingtao/Downloads

# 清理构建目录
rm -rf ./zoic
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## 👥 作者

- [@wujingtao](https://github.com/ICF-M78)

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 提交 Issue
- 发送邮件至：[your-email@example.com]

---

如果这个项目对你有帮助，欢迎给一个 ⭐️
