// functiom

// problem 6: write a javascript function that reverse a number
// rule:1
/*
function reverseNumber(num){
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverseNumber(34))
*/

// way 2
/*
function reverseNumber(num){
    var rev=0;
    while(num>0){
        var rem=num%10;
        rev=rev*10+rem;
        num =Math.floor(num/10);
    }
    return rev;

}
console.log(reverseNumber(123456))
*/


// problem 7:check wheter a passed string is palindrom or not
/*
function stringPalChecker(str){
    var reverse = str.split("").reverse().join("");
    if(reverse === str) return true;
    else return false;
}
console.log(stringPalChecker("151"))
*/

// problem 8: write a javascript function that return a passed string with letters in alphaetical order.
/*
function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("");
}
console.log(stringAlphaBeticalOrder("apple"))

// problem 9: capetilize first letter of word

function capitalize(str){
    var allWords = str.split(" ").map(function(word){
       return word.charAt(0).toUpperCase()+ word.substring(1)
    })
    return allWords.join(" ");
    

}
console.log(capitalize("kya jaan kaisi ho"));
*/

// problem 10: write a javscript function to get the number
//   of  occurance of each letter in specified string. 
