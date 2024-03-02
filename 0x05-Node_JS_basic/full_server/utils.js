import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const reqObj = {
      CS: [],
      SWE: [],
    };

    for (const line of lines.slice(1)) {
      const [firstname, , , field] = line.split(',');

      if (field === 'CS') {
        reqObj.CS.push(firstname);
      } else if (field === 'SWE') {
        reqObj.SWE.push(firstname);
      }
    }

    resolve(reqObj);
  });
});

module.exports = readDatabase;
