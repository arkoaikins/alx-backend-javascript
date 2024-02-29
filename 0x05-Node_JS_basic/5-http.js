const http = require('http');
const countStudents = require('./3-read_file_async');

function handleRequest(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2]; // Access file path from arguments

    countStudents(filePath)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}

const app = http.createServer(handleRequest);

app.listen(1245, () => console.log('Server listening on 1245'));

module.exports = app;
