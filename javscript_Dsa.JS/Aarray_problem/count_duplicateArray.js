function countDuplicates(arr) {
    const counts = {};
    let duplicateCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (counts[element]) {
        counts[element]++;
        if (counts[element] === 2) {
          duplicateCount++;
        }
      } else {
        counts[element] = 1;
      }
    }
  
    return duplicateCount;
  }
  
  const myArray = [5,6,5,6,7,8,7,8];
  const duplicateCount = countDuplicates(myArray);
  
  console.log("Number of duplicates:", duplicateCount);
  