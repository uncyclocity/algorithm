const checksort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

console.log(checksort([4, 1, 2, 3, 5]));
console.log(checksort([1, 2, 3, 4, 5]));
