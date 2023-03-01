//Patil Rohit Kalyan
//Roll No. = 2201149
//program to Reverse a string using stack
function reverseString(str) {
  let stack = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
let originalString = "hello";
let reversedString = reverseString(originalString);
console.log(reversedString); // outputs "olleh"

