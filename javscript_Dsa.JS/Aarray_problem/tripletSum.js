function tripletSum(arr,x){
    let targetSum =x;
    var count =0;
    for(let i = 0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                let tripletSumPair = arr[i]+arr[j]+arr[k];
                if(tripletSumPair === targetSum){
                    console.log([arr[i],arr[j],arr[k]])
                    count++;
                }
            }
        }
    }
    return count;
}
let result =tripletSum([1,2,3,4,5,6,7,8,9],12)
console.log(result);


