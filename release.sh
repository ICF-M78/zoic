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