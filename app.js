const http = require('http');

const port = 5000
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    console.log(`App running on Port: ${port}`);
});
server.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});