function partition(arr, l, r, pivot) {
  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      i++;
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  let tmp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = tmp;
  return i + 1;
}

function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l < r) {
    const pivot = arr[r];
    const p = partition(arr, l, r, pivot);

    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);

    return arr;
  }
}

console.log(quickSort([4, 1, 2, 7, 5]));
