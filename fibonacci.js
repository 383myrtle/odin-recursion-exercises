console.log("Fibonacci - iterative version");

function fibs(n) {
  const arr = [];
  for (i = 0; i < n; i++) {
    if (i == 0) {
      arr.push(0);
    } else if (i == 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

console.log(fibs(8));

console.log("Fibonacci - recursive version");

function fibsRec(n) {
  let arr;
  if (n === 2) {
    return [0, 1];
  } else {
    arr = fibsRec(n - 1);
    arr.push(arr.at(-1) + arr.at(-2));
    return arr;
  }
}

console.log(fibsRec(8));