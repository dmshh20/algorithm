function selectionSort(arr) {
  const newArr = [];
  const copy = [...arr]; // make a copy so we don't change the original array

  while (copy.length > 0) {
    // find the index of the smallest element
    let smallestIndex = 0;
    for (let i = 1; i < copy.length; i++) {
      if (copy[i] < copy[smallestIndex]) {
        smallestIndex = i;
      }
    }

    // remove it from copy and push into newArr
    newArr.push(copy.splice(smallestIndex, 1)[0]);
  }

  return newArr;
}

const arr = [7, 4, 9, 10, 8, 6, 4, 2, 34, 61, 52];
console.log(selectionSort(arr));
