//Patil Rohit Kalyan
//Roll No. = 2201149
//Program to display Power Set of a given set using backtracking approach

function powerSet(set, index, current, result) {
    if (index === set.length) {
      result.push(current.slice());
      return;
    }
  
    powerSet(set, index + 1, current, result);
    current.push(set[index]);
    powerSet(set, index + 1, current, result);
    current.pop();
  }
  
  function getPowerSet(set) {
    let result = [];
    powerSet(set, 0, [], result);
    return result;
  }
  
  console.log(getPowerSet([1, 2, 3]));
  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
  