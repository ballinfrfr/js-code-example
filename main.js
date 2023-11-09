const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let age;
let date;
let devin;

rl.question('What\'s the date today? ', (userdate) => {
  date = userdate;

  rl.question('Does Devin suck at life? ', (devinsuckatlife) => {
    devin = devinsuckatlife;

    rl.question('How old are you? ', (userAge) => {
      age = userAge;

      rl.question('What is your name? ', (name) => {
        if (devin.toLowerCase() === "no") {
          console.log('Yes, he does.');
        } else {
          console.log(`Hello, ${name}! You are ${age} years old and the date is ${date}`);
        }
        rl.close();
      });
    });
  });
});
