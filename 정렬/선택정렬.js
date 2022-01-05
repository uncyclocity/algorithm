const selectsort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const target = arr[i];
      const toCompare = arr[j];
      if (target > toCompare) {
        arr[i] = toCompare;
        arr[j] = target;
      }
    }
  }
  return arr;
};

console.log(selectsort([4, 1, 5, 2, 3]));
