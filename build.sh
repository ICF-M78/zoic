#!/bin/bash

# 定义项目名称变量
PROJECT_NAME="zoic"

# 构建项目
pnpm build

# 压缩项目文件
zip -r ${PROJECT_NAME}.zip ./${PROJECT_NAME}

# 移动压缩文件到下载目录
mv ${PROJECT_NAME}.zip /Users/wujingtao/Downloads

# 清理构建目录
rm -rf ./${PROJECT_NAME} 