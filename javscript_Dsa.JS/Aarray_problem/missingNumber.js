
// // array should lie b/w [0,-------n]=then length is arr.length only
// // if array start with [1,------------n] then length will be (arr.length+1)
// // 
// function findMissingNumber(arr) {
//     // Calculate the length of the expected sequence
//     const n = arr.length;
  
//     // Calculate the expected sum of the sequence
//     const expectedSum = (n * (n + 1)) / 2;
  
//     // Calculate the actual sum of the array
//     let actualSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       actualSum += arr[i];
//     }
  
//     const missingNumber = expectedSum - actualSum;
  
//     return missingNumber;
//   }
 
//   const array = [0,1,2,5,3];
//   const missingNumber = findMissingNumber(array);
//   console.log("Missing number:", missingNumber);
  
// ++++++++++++++++++++++++
function findMissingNumber(arr) {
    // Initialize XOR result
    let xor = 0;
    
    // XOR all the elements in the array
    for (let i = 0; i < arr.length; i++) {
      xor ^= arr[i];
    }
    
    // XOR all the numbers from 1 to n (inclusive)
    for (let i = 1; i <= arr.length + 1; i++) {
      xor ^= i;
    }
    
    return xor;
  }
  
  // Example usage:
  const numbers = [1, 2, 4, 6, 3, 7, 8];
  const missingNumber = findMissingNumber(numbers);
  console.log("The missing number is:", missingNumber);
  