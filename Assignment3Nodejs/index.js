const http = require('http');
const fs = require('fs');
const path = require('path');

const home = fs.readFileSync(path.join(__dirname, './home.html'));
const course = fs.readFileSync(path.join(__dirname, './course.html'));
const login = fs.readFileSync(path.join(__dirname, './login.html'));
const style = fs.readFileSync(path.join(__dirname, './style.css'));

const myserver = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(home);
    }
    else if (req.url === '/course') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(course);
    }
    else if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(login);
    }
    else if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(style);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }

});

myserver.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
