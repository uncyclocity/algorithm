const bubblesort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const first = arr[j];
      const second = arr[j + 1];
      if (first > second) {
        arr[j] = second;
        arr[j + 1] = first;
      }
    }
  }
  return arr;
};

console.log(bubblesort([4, 1, 2, 0, 5]));
