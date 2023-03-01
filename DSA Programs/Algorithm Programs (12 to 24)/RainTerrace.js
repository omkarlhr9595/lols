//Patil Rohit Kalyan
//Roll No. = 2201149
// Rain Terrace problem.


function rainTerrace(arr) {
    let n = arr.length;
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    let water = 0;
  
    left[0] = arr[0];
    for (let i = 1; i < n; i++) {
      left[i] = Math.max(left[i - 1], arr[i]);
    }
  
    right[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      right[i] = Math.max(right[i + 1], arr[i]);
    }
  
    for (let i = 0; i < n; i++) {
      water += Math.min(left[i], right[i]) - arr[i];
    }
  
    return water;
  }
  
  const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const result = rainTerrace(heights);
  
  console.log(result); // Outputs: 6
  