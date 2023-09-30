function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    
    return compressed;
}

const originalString = "aabcccccaaa";
const compressedString = compressString(originalString);

console.log('Original String:', originalString);
console.log('Compressed String:', compressedString);
