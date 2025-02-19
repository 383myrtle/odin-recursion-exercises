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