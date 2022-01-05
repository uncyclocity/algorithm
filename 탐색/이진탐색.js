const search = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = parseInt((low + high) / 2);

  while (arr[mid] !== target) {
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
    mid = parseInt((low + high) / 2);
  }

  return mid;
};

console.log(search([1, 2, 4, 6, 8, 9, 10], 2));
