#!/bin/bash

# 部署脚本
# 使用方法: ./deploy.sh user@server-ip /var/www/medicine-study

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查参数
if [ "$#" -ne 2 ]; then
    echo -e "${RED}用法: $0 user@server-ip /path/to/deploy${NC}"
    echo "示例: $0 root@192.168.1.100 /var/www/medicine-study"
    exit 1
fi

SERVER=$1
DEPLOY_PATH=$2

echo -e "${GREEN}开始部署到 $SERVER:$DEPLOY_PATH${NC}"

# 创建远程目录（如果不存在）
echo -e "${YELLOW}创建远程目录...${NC}"
ssh $SERVER "mkdir -p $DEPLOY_PATH"

# 同步文件
echo -e "${YELLOW}上传文件...${NC}"
rsync -avz --exclude 'node_modules' \
           --exclude '.git' \
           --exclude '.DS_Store' \
           --exclude '*.log' \
           --exclude '.env' \
           ./ $SERVER:$DEPLOY_PATH/

# 设置文件权限
echo -e "${YELLOW}设置文件权限...${NC}"
ssh $SERVER "chown -R www-data:www-data $DEPLOY_PATH"
ssh $SERVER "chmod -R 755 $DEPLOY_PATH"
ssh $SERVER "find $DEPLOY_PATH -type f -exec chmod 644 {} \;"

echo -e "${GREEN}部署完成！${NC}"
echo -e "${YELLOW}请确保 Nginx 配置正确，然后重启 Nginx:${NC}"
echo "  sudo systemctl restart nginx"

