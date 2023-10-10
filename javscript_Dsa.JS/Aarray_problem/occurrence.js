const str = "indrajeet"; // Replace with your input string

let maxChar = "";
let count = 0;

for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    let charCount = 0;
    
    for (let j = 0; j < str.length; j++) {
        if (str.charAt(j) === char) {
            charCount++;
        }
    }

    if (charCount > count) {
        maxChar = char;
        count = charCount;
    }
}

console.log("max occurrence:", maxChar, "maxTime:", count);


2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,array

  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // Replace with your input array

let maxElement = null;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let elementCount = 0;
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === element) {
            elementCount++;
        }
    }

    if (elementCount > count) {
        maxElement = element;
        count = elementCount;
    }
}

console.log("Element with max occurrence:", maxElement);
console.log("Max occurrence count:", count);
