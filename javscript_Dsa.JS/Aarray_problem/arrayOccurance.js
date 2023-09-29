function calculateFrequency(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}

const arr = [1, 2, 8, 3, 2, 2, 2, 5, 1];
const frequency = calculateFrequency(arr);
console.log(frequency)


// count maximum occrance
let maxOccurrence = 0;
let maxElement = null;

for (const key in frequency) {
    if (frequency.hasOwnProperty(key)) {
        if (frequency[key] > maxOccurrence) {
            maxOccurrence = frequency[key];
            maxElement = key;
        }
    }
}
// console.log(frequency);
console.log(`${maxElement} repeate maximum times ${maxOccurrence}`)