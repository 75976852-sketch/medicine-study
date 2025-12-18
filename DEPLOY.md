# 部署指南

> 💡 **小白用户请先看这个：** 如果你是第一次部署，建议先查看 `部署教程-超详细版.md` 或 `一键部署-Vercel.md`，里面有非常详细的步骤说明。

## 项目说明

这是一个纯前端应用（HTML/CSS/JavaScript），使用浏览器 localStorage 存储数据。可以直接部署到任何静态网站托管服务。

## 部署方式

### 方式一：使用 Nginx（推荐）

#### 1. 准备服务器
- 确保服务器已安装 Nginx
- 有域名并已解析到服务器IP

#### 2. 上传文件
```bash
# 使用 scp 上传文件到服务器
scp -r /Users/liyuange/tranditional\ chineses/* user@your-server-ip:/var/www/medicine-study/

# 或使用 FTP/SFTP 工具上传
```

#### 3. 配置 Nginx
创建配置文件：`/etc/nginx/sites-available/medicine-study`

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # 替换为你的域名
    
    root /var/www/medicine-study;
    index index.html;
    
    # 启用 Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # 缓存静态资源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA 路由支持（如果需要）
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 安全头部
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 4. 启用配置并重启 Nginx
```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/medicine-study /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 5. 配置 HTTPS（推荐）
使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期（certbot 会自动配置）
```

### 方式二：使用 Node.js HTTP 服务器

#### 1. 创建 server.js
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname);

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // 防止路径遍历攻击
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 404 - 返回 index.html（SPA 支持）
                fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Server Error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

#### 2. 使用 PM2 运行
```bash
# 安装 PM2
npm install -g pm2

# 启动服务
pm2 start server.js --name medicine-study

# 设置开机自启
pm2 startup
pm2 save
```

### 方式三：使用 GitHub Pages（免费）

#### 1. 创建 GitHub 仓库并上传代码
```bash
cd /Users/liyuange/tranditional\ chineses
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/medicine-study.git
git push -u origin main
```

#### 2. 启用 GitHub Pages
- 进入仓库 Settings → Pages
- Source 选择 `main` 分支
- 点击 Save
- 访问：`https://your-username.github.io/medicine-study/`

### 方式四：使用 Vercel（免费，推荐）

#### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

#### 2. 部署
```bash
cd /Users/liyuange/tranditional\ chineses
vercel
```

#### 3. 绑定自定义域名
- 在 Vercel 控制台添加域名
- 配置 DNS 记录（按提示操作）

### 方式五：使用 Netlify（免费）

#### 1. 安装 Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. 部署
```bash
cd /Users/liyuange/tranditional\ chineses
netlify deploy --prod
```

#### 3. 绑定自定义域名
- 在 Netlify 控制台添加域名
- 配置 DNS 记录

## 域名配置

### DNS 设置（以 Cloudflare 为例）

#### A 记录（IPv4）
- 类型：A
- 名称：@ 或 www
- 内容：服务器IP地址
- TTL：自动

#### CNAME 记录（如果需要）
- 类型：CNAME
- 名称：www
- 内容：your-domain.com
- TTL：自动

### SSL 证书配置

#### 使用 Let's Encrypt（免费）
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

#### 使用 Cloudflare（免费 SSL）
1. 在 Cloudflare 添加域名
2. 将 DNS 服务器改为 Cloudflare 提供的
3. 启用 SSL/TLS → 加密模式选择"完全"

## 性能优化建议

### 1. 启用 Gzip 压缩（Nginx）
已在配置文件中包含

### 2. 添加缓存策略
已在配置文件中包含

### 3. 使用 CDN（可选）
- Cloudflare（免费）
- 腾讯云 CDN
- 阿里云 CDN

## 安全建议

1. **启用 HTTPS**：使用 SSL 证书加密传输
2. **设置安全头部**：已在 Nginx 配置中包含
3. **定期更新**：保持服务器和 Nginx 最新版本
4. **防火墙配置**：只开放必要端口（80, 443, 22）

```bash
# Ubuntu/Debian 防火墙示例
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 备份建议

虽然数据存储在浏览器 localStorage，但建议：

1. **代码备份**：使用 Git 仓库
2. **服务器备份**：定期备份网站文件
3. **数据库备份**：虽然使用 localStorage，但可以导出功能（未来可添加）

## 监控和维护

### 1. 日志查看
```bash
# Nginx 访问日志
sudo tail -f /var/log/nginx/access.log

# Nginx 错误日志
sudo tail -f /var/log/nginx/error.log
```

### 2. 性能监控
- 使用 Google Analytics
- 使用服务器监控工具（如 Prometheus + Grafana）

### 3. 更新部署
```bash
# 重新上传文件后
sudo systemctl reload nginx  # Nginx 无需重启，重载配置即可
```

## 常见问题

### Q: 域名无法访问？
A: 检查 DNS 解析是否生效（使用 `dig your-domain.com` 或 `nslookup your-domain.com`）

### Q: 403 Forbidden 错误？
A: 检查文件权限和 Nginx 配置中的 root 路径

### Q: 502 Bad Gateway？
A: 检查服务器是否正常运行，端口是否开放

### Q: localStorage 数据会在不同设备间同步吗？
A: 不会，localStorage 是浏览器本地存储。如需跨设备同步，需要后端服务器支持。

## 联系支持

如有问题，请查看：
- Nginx 官方文档：https://nginx.org/en/docs/
- Let's Encrypt 文档：https://letsencrypt.org/docs/

