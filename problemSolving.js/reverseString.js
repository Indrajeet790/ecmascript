// problem 1: reverse string
var str="hlo ji kaise ho ap"
 var savedStr=str.split(" ").map((word)=>{
    return word.split("").reverse().join("")
})

// console.log(savedStr.join(" "));

// problem 2
// how to check if an object is an array or not?
/*
function checkArray(ele){
    return Array.isArray(ele)
}
console.log(checkArray([]))
console.log(checkArray({}))
*/

//  problem 3 ##################################
// how to empty an array in javascript?
// do not reset it to a new Array, and loop through to pop each value
/*
var arr = [1,2,3,4,5,6]
arr.length = 0;
console.log(arr);
*/


// problem 4  make duplicate
/*
function duplicate(arr){
    return arr.concat(arr);

}
console.log(duplicate([1,2,3,4,5]))
*/
