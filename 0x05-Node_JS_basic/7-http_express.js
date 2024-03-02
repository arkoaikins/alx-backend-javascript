const express = require('express');
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

const app = express();
const PORT = 1245;
const DATABASE_PATH = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(DATABASE_PATH);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send('This is the list of our students');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
