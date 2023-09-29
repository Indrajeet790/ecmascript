function reduceString(str) {
    let reducedStr = '';
    let currentChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (currentChar !== str[i]) {
            reducedStr += currentChar;
            currentChar = str[i];
        }
    }

    reducedStr += currentChar; // Add the last character
    return reducedStr;
}

const originalString = "aaabbbcccccdddeeeee";
const reducedString = reduceString(originalString);

console.log('Original String:', originalString);
console.log('Reduced String:', reducedString);
