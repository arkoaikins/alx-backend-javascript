const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(path).then((data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${data}`);
    }).catch(() => {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('This is the list of our students');
    });
  }
});
app.listen(1245, () => console.log('Server listening on 1245'));
module.exports = app;
