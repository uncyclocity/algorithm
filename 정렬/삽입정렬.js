const insertsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let targetIdx = i;
    for (let j = i - 1; j >= 0; j--) {
      const target = arr[targetIdx];
      const toCompare = arr[j];
      if (target < toCompare) {
        arr[targetIdx] = toCompare;
        arr[j] = target;
        targetIdx--;
      }
    }
  }
  return arr;
};

console.log(insertsort([4, 1, 3, 2, 6]));
