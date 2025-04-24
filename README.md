# 字觉（zoic）

## 项目介绍

- 根据文字内容生成壁纸。
- 调整文字颜色
- 调整文字大小
- 调整文字字体
- 背景颜色

### 设置界面

- 悬浮在左侧
- 可以关闭

### 展示界面

- 占满全屏
- 左上角显示悬浮按钮，按钮镂空，点击唤起设置界面

$系统名称=字觉（zoic）

## 技术栈

- Vue 3
- TypeScript
- Vite
- SASS
- UnoCSS
- Naive UI
- Pinia
- eslint
- 图标使用 @vicons/carbon

## 开发规范

### 项目结构

- 组件目录命名为 `cmpts`（而非 components）
- 使用 TypeScript 进行开发
- 组件使用 `<script lang="ts" setup>` 语法

### 组件模板

```vue
<!-- 组件用途说明 -->
<template>
  <div></div>
</template>

<script lang="ts" setup>
// MARK: import
import { onMounted } from "vue";

// MARK: emit
// const emit = defineEmits([])

// MARK: props
// const props = defineProps({})

// MARK: interface
// interface Props {}

// MARK: params
// const loading = ref(false)

// MARK: computed
// const computedValue = computed(() => {})

// MARK: watch
// watch(() => {}, () => {})

// MARK: func
// const handleXXX = () => {}

// MARK: expose
defineExpose({});

// MARK: hooks
onMounted(() => {});
</script>

<style lang="scss" scoped></style>
```

### 开发环境配置

1. 包管理工具：pnpm
2. 开发服务器配置：

   - 自动打开页面：`open: true`
   - 指定端口：7070

3. 代码格式化：

   - 使用 Prettier
   - 配置文件：`.prettierrc.json`

   ```json
   {
     "printWidth": 100,
     "singleQuote": true,
     "trailingComma": "es5",
     "tabWidth": 4,
     "semi": true,
     "bracketSpacing": true,
     "arrowParens": "avoid",
     "vueIndentScriptAndStyle": false
   }
   ```

4. 环境变量配置：

   - 全局环境：`.env`
     ```
     VITE_BASE_URL="/$系统名称"
     ```
   - 开发环境：`.env.development`
     ```
     VITE_APP_BASE_URL="/dev"
     ```
   - 生产环境：`.env.production`
     ```
     VITE_APP_BASE_URL="/api-proxy"
     ```

5. 代理配置：
   - 开发环境代理：`/dev`

### 构建部署

1. 构建脚本：`build.sh`

```bash
# 定义项目名称变量
PROJECT_NAME="$系统名称"

# 构建项目
pnpm build

# 压缩项目文件
zip -r ${PROJECT_NAME}-view.zip ./${PROJECT_NAME}

# 移动压缩文件到下载目录
mv ${PROJECT_NAME}-view.zip /Users/wujingtao/Downloads

# 清理构建目录
rm -rf ./${PROJECT_NAME}
```

2. Git 忽略配置：
   - 忽略 `node_modules` 目录

## 开发指南

1. 克隆项目
2. 安装依赖：`pnpm install`
3. 启动开发服务器：`pnpm dev`
4. 构建项目：`pnpm build`

## 注意事项

- 确保使用 pnpm 作为包管理工具
- 遵循组件模板规范
- 保持代码格式统一
- 注意环境变量配置
