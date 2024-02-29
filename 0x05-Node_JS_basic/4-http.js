const http = require('http');

function startServer() {
  const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  });

  app.listen(1245, () => console.log('Server listening on 1245'));
}

startServer();
module.exports = startServer;
