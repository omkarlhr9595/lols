//Patil Rohit Kalyan
//Roll No. = 2201149
//Maximmum Sabarray

function maximum_subarray(arr, n){
    let max_sum = Number.MIN_VALUE;
    for(let i = 0 ; i<n ; i++){
        max_sum = 0;
        for(let j = i ; j<n ; j++){
            sum = max_sum + arr[j]
            if(sum>max_sum){
                max_sum = sum;
            }
        }
    }
    return max_sum;
 }

 let arr = [2,-4,5, 4,-5, 5, 2 , -4 , 2 ,4 ]
 let n = arr.length
 console.log(maximum_subarray( arr , n))