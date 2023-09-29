// // program to reverse a string and calculate character frequencies

function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function calculateCharacterFrequency(str) {
    const frequency = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}



const reversedString = reverseString("mynameisindrajeet");
const characterFrequency = calculateCharacterFrequency("mynameisindrajeet");

console.log('Reversed String:', reversedString);
console.log('Character Frequency:', characterFrequency);

// occurnce of string
let maxChar = "";
let maxCount = 0;

for (let char in characterFrequency) {
    if (characterFrequency[char] > maxCount) {
        maxChar = char;
        maxCount = characterFrequency[char];
    }
}
console.log('Maximum Occurrence:', maxChar, 'occurs', maxCount, 'times')








