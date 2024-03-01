const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const hashtable = {};
        let students = -1;
        let result = '';
        for (const line of lines) {
          if (line.trim() !== '') {
            const columns = line.split(',');
            const field = columns[3];
            const firstname = columns[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }
              hashtable[field] = [...hashtable[field], firstname];
            }
            students += 1;
          }
        }
        result += `Number of students: ${students}\n`;
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            result += `Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const port = 1245;
const host = '127.0.0.1';

const handleRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((result) => {
        res.end(result);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
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
