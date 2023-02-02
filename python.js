function print(str) {
  console.log(str);
}

function input(prompt) {
  return new Promise((resolve) => {
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function range(start, end, step = 1) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

String.prototype.len = function() {
  return this.length;
};

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
