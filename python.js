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

function len(str) {
  return str.length;
};

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function average(arr) {
  return sum(arr) / arr.length;
}

function sort(arr, comparator = (a, b) => a - b) {
  return arr.sort(comparator);
}

function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function slice(arr, start, end) {
  return arr.slice(start, end);
}

function count(arr, element) {
  return arr.reduce((count, cur) => count + (cur === element), 0);
}

function str(obj) {
  return obj.toString();
}

function int(value) {
  return parseInt(value);
}

function float(value) {
  return parseFloat(value);
}

function type(obj) {
  return typeof obj;
}


module.exports = {
  print,
  input,
  range,
  len,
  sum,
  average,
  sort,
  max,
  min,
  reverse,
  slice,
  count,
  str,
  int,
  float,
  type
};
