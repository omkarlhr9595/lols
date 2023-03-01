//Patil Rohit Kalyan
//Roll No. = 2201149
//check for balanced parentheses of an expression by using stacks

function areParenthesesBalanced(expression) {
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    let character = expression[i];

    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
    } else if (character === ')' || character === '}' || character === ']') {
      if (stack.length === 0) {
        return false;
      }

      let lastCharacter = stack.pop();

      if (
        (character === ')' && lastCharacter !== '(') ||
        (character === '}' && lastCharacter !== '{') ||
        (character === ']' && lastCharacter !== '[')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let expression = "({[]})";
let result = areParenthesesBalanced(expression);
console.log(result); // outputs true
