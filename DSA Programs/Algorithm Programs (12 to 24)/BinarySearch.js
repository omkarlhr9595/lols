//Patil Rohit Kalyan
//Roll No. = 2201149
//Binary Search

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

const numbers = [2, 5, 9, 15, 22];
const target = 22;
const result = binarySearch(numbers, target);

console.log(result);
