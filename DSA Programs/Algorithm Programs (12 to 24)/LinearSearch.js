//Patil Rohit Kalyan
//Roll No. = 2201149
//Linear Search

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [2, 5, 9, 15, 22];
const target = 22;
const result = linearSearch(numbers, target);

console.log(result);
