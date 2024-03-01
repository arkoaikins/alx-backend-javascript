const http = require('http');
const countStudents = require('./2-read_file');

const port = 1245;
const host = '127.0.0.1';

const handleRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(process.argv[2]); // Call the countStudents function without console.log
      res.end(); // End the response after calling countStudents
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
};

const server = http.createServer(handleRequest);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = server;
