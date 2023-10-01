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


function pairSum(Arr, x) {
  let arr=Arr.sort();
  let targetSum = x;

  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {

    // check unique pair of element
    while (arr[left] == arr[left + 1]) {
      left++;
    }

    while (arr[right] == arr[right - 1]) {
      right--;
    }


     sum = arr[left] + arr[right]

    if (sum === targetSum) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;

    } else if (sum > targetSum) {
      right--;
    } else {
      left++
    }
  }
  return result;
}

const printPairSum = pairSum([ 8,1, 7,2, 4,3, 3,5, 4, 5, 6,7],13)
console.log(printPairSum);

