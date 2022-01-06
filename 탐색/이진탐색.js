const search = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = parseInt((low + high) / 2);

  while (low <= high) {
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
    mid = parseInt((low + high) / 2);
  }

  return null;
};

console.log(search([1, 2, 4, 6, 8, 9, 10], 7));
