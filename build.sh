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

# 发布 114.215.187.227 
# 端口 1234 
# 账户 norma 
# 密码 000626
# 地址 /var/www/pages/zoic

scp -P 1234 /Users/wujingtao/Downloads/zoic.zip norma@114.215.187.227:/var/www/pages

ssh -p 1234 norma@114.215.187.227

# 解压
unzip zoic.zip

# 删除压缩文件
rm -rf zoic.zip