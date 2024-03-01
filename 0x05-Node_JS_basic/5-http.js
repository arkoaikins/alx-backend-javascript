const http = require('http');
const countStudents = require('./2-read_file'); // Update the path to the countStudents file

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
      const result = countStudents(process.argv[2]);
      res.end(result);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
};

const app = http.createServer(handleRequest);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
