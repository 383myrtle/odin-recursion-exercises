function mergeSort(arr = []) {
  if (arr.length === 0) {
    console.log("Error. Array is empty");
  } else if (arr.length === 1) {
    return arr;
  } else {
    const middleIndex = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middleIndex)); 
    const right = mergeSort(arr.slice(middleIndex, arr.length));
    let result = [];
    while (right.length !== 0) {
      let min;
      if (left.length === 0) {
        return result.concat(right);
      }
      if (left[0] < right[0]) {
        min = left.shift();
      } else {
        min = right.shift();
      }
      result.push(min);
    }
    return result.concat(left);
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
