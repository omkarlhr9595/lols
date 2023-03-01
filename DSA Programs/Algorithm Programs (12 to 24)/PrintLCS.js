//Patil Rohit Kalyan
//Roll No. = 2201149
//Program to Print LCS (Longest Common Subsequence)


function LCS(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let dp = new Array(m+1);
  
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n+1).fill(0);
    }
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i-1] === str2[j-1]) {
          dp[i][j] = dp[i-1][j-1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
      }
    }
  
    let index = dp[m][n];
    let lcs = new Array(index + 1);
    lcs[index] = "";
  
    let i = m;
    let j = n;
    while (i > 0 && j > 0) {
      if (str1[i-1] === str2[j-1]) {
        lcs[index-1] = str1[i-1];
        i--;
        j--;
        index--;
      } else if (dp[i-1][j] > dp[i][j-1]) {
        i--;
      } else {
        j--;
      }
    }
  
    return lcs.join("");
  }
  
  console.log(LCS("ABCD", "ACDF")); // ACD
  