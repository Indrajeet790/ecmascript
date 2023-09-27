 
//  map method
// const numbers =[1,2,3,4,5]

// // map javascript
// const newArr =numbers.map((item,index,array)=>{
//     return item +5

// })
// console.log(newArr)

// +##########filter method++++++++++

// const newNum=numbers.filter((item,index,array)=>{
//     return item >2 

// })
// ++++++++++++++++reduce method++++++++++++
// const reduceNum=numbers.reduce((prev,item)=>{
//     return prev + item

// },0)
// console.log(reduceNum)
// ########################################
// problem 1: find second largest number fom a array

/*
function secondLagest(arr){
    let largest= -1;
    let secondLagest=-1
    
    for(let i =0;i<arr.length;i++){
        if(arr[i] > largest){
            secondLagest =largest;
            largest =arr[i];
        }else if(arr[i] != largest & arr[i] > secondLagest){
            secondLagest =arr[i];
        }
    }
    return secondLagest;
}
console.log(secondLagest([12,34,23,45,65]))

*/

// problem:2 :=> rotate an array by
function rotateArray(arr,k){
    if(size > k){
        k =k%size;
    }
    reverse(nums,0,nums.length -1)
      reverse(nums,0,k -1)
        reverse(nums,k,nums.length -1)
        return nums;
}
function reverse(nums,left,right){
    while(left < right){
        const temp = nums[left];
        nums[left++] =nums[right];
        nums[right--] = temp;

    }
}

console.log(rotateArray([1,2,3,4,5,6,7],3))
