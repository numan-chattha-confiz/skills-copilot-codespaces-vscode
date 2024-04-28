//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = [];
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathname === '/comments') {
        if (req.method === 'GET') {
            res.end(JSON.stringify(comments));
        } else if (req.method === 'POST') {
            let str = '';
            req.on('data', chunk => {
                str += chunk;
            });
            req.on('end', () => {
                comments.push(JSON.parse(str));
                res.end(JSON.stringify(comments));
            });
        }
    } else {
        fs.readFile(path.join(__dirname, pathname), 'utf8', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    }
});
server.listen(3000, () => {
    console.log('Server running at http://'); // Fix: Added closing quotation mark
});
