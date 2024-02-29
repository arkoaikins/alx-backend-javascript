const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');

    const csStudents = lines.filter((line) => line.includes('CS')).map((line) => line.split(',')[0]);
    const sweStudents = lines.filter((line) => line.includes('SWE')).map((line) => line.split(',')[0]);

    const totalStudents = csStudents.length + sweStudents.length;

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
