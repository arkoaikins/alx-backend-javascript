/*
Function that that reads the database file
*/

const fs = require('fs'); // Import the fs module for file system access

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');

    const studentCounts = data.reduce((acc, line) => {
      if (line.includes('CS')) {
        acc.csCount += 1;
        acc.csList.push(line.split(',')[0]);
      } else if (line.includes('SWE')) {
        acc.sweCount += 1;
        acc.sweList.push(line.split(',')[0]);
      }
      return acc;
    }, {
      csCount: 0, sweCount: 0, csList: [], sweList: [],
    });

    console.log(`Number of students: ${studentCounts.csCount + studentCounts.sweCount}`);
    console.log(`Number of students in CS: ${studentCounts.csCount}. List: ${studentCounts.csList.join(', ')}`);
    console.log(`Number of students in SWE: ${studentCounts.sweCount}. List: ${studentCounts.sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
