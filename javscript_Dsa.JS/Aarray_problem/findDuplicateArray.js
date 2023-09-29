// function findDuplicates(arr) {
//     const duplicates = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       let isDuplicate = false;
      
//       // Check if the current element is a duplicate
//       for (let j = 0; j < i; j++) {
//         if (arr[i] === arr[j]) {
//           isDuplicate = true;
//           break;
//         }
//       }
      
//       // If it's a duplicate and hasn't been added to the duplicates array yet, add it
//       if (isDuplicate && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
  
//     return duplicates;
//   }
  
//   const myArray = [3,3,4,5,5,5,5,5,6,7,8,9,8,9];
//   const duplicates = findDuplicates(myArray);
//   console.log("Duplicates:", duplicates); // Output: Duplicates: [2, 4]
  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function findDuplicates(arr) {
    const duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    
    return duplicates;
  }
  
  const myArray = [1,,5,7,6,7,5, 2, 3, 4, 2, 5, 6, 3];
  const duplicateElements = findDuplicates(myArray);
  
  console.log("Duplicate elements:", duplicateElements);
  