const insertsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(j);
      const target = arr[i];
      const toCompare = arr[j];
      if (target < toCompare) {
        arr[i] = toCompare;
        arr[j] = target;
        i--;
      }
    }
  }
  return arr;
};

console.log(insertsort([4, 1, 3, 2, 6]));
