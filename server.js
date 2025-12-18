const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname);

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
    // 解析 URL，去除查询参数
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let filePath = path.join(PUBLIC_DIR, parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname);
    
    // 防止路径遍历攻击
    const resolvedPath = path.resolve(filePath);
    if (!resolvedPath.startsWith(path.resolve(PUBLIC_DIR))) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Forbidden');
        return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 404 - 对于 SPA，返回 index.html
                if (ext === '' || !ext) {
                    fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err, data) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                            res.end('Server Error');
                        } else {
                            res.writeHead(200, { 
                                'Content-Type': 'text/html; charset=utf-8',
                                'Cache-Control': 'no-cache'
                            });
                            res.end(data);
                        }
                    });
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('File Not Found');
                }
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Server Error');
            }
        } else {
            // 设置缓存头
            let cacheControl = 'no-cache';
            if (['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.woff', '.woff2', '.ttf'].includes(ext)) {
                cacheControl = 'public, max-age=31536000, immutable'; // 1年
            }
            
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': cacheControl
            });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`🌿 中药背诵助手服务器运行在 http://localhost:${PORT}/`);
    console.log(`按 Ctrl+C 停止服务器`);
});

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('SIGTERM 信号 received. 关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});

