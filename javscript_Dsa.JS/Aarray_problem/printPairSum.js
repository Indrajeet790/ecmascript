function pairSum(arr,x){
let targetSum =x;

let count =0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let pairSum =arr[i]+arr[j];
        if(pairSum === targetSum){
            console.log([arr[i],arr[j]]);
            count++

        }

    }
}
return count;
}
let result =pairSum([-1,-3,-4,-6,0,1,2,3,4,5,6,7,8],0)
console.log(result);

