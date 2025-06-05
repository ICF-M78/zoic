# 构建项目
pnpm build

# 压缩项目文件
zip -r zoic.zip ./zoic

# 移动压缩文件到下载目录
mv zoic.zip /Users/wujingtao/Downloads

# 清理构建目录
rm -rf ./zoic 