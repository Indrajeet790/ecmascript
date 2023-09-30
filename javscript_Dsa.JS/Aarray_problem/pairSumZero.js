/*
function pairSumToZero(arr) {
    const result = [];
  
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // Check if the sum of the current pair equals zero
        if (arr[i] + arr[j] === 0) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  
    return result; 
  }
  
  // Example usage:
  const inputArray = [2, -2, 4, -4, 0];
  const pairs = pairSumToZero(inputArray);
  
  console.log("Pairs that sum to zero:");
  for (const pair of pairs) {
    console.log(pair);
  }
  */

// // +++++++++++++++++++++++++++++++++++++++++++++++++


function pairSum(arr,x){
  let targetSum =x;
  let left =0;
  let right=arr.length-1;
  let result=[];

  while(left < right){
    sum= arr[left] + arr[right]

    if(sum === targetSum){
       result.push([arr[left],arr[right]]);
       left++;
       right--;

    }else if(sum > targetSum){
      right--;
    }else{
      left++
    }
  }
  return result;
}

const printPairSum = pairSum([-5,0,1,2,3,4,5,6],6)
console.log(printPairSum );
