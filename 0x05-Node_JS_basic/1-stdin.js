/*
Create a program named  that will be executed through command line
*/

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name.toString()}`);
  if (process.stdin.isTTY) {
    process.exit(0);
  } else {
    process.stdin.on('close', () => {
      console.log('This important software is now closing');
    });
  }
});
