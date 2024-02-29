const express = require('express');
const countStudents = require('./3-read_file_async');

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
