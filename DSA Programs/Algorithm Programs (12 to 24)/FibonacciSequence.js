//Patil Rohit Kalyan
//Roll No. = 2201149
//Sequence of Fibonacci numbers using Dynamic Programming

function fibonacciDP(n) {
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
    }
  
    return dp[n];
  }
  
  console.log(fibonacciDP(9)); // 34
  