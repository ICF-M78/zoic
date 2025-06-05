# 拷贝到服务器
scp ~/Downloads/zoic.zip m87:/var/www/

# 在服务器上执行命令
ssh m87 "cd /var/www/ && rm -rf zoic && unzip zoic.zip && rm -rf zoic.zip"

rm -rf ~/Downloads/zoic.zip