
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);



function betterThanAverage(arr) {
    
    var sum = 0;
    var count = 0
    for(var i=0;i<arr.length;i++){
        sum= sum+arr[i];
        
    }

        sum= sum/arr.length;
        
        for(i=0;i<arr.length;i++){
            if(arr[i]>sum){
            count++;
            }
        }

    
    
    // count how many values are greated than the average
    return count;

}

console.log(result); // we expect back 4
