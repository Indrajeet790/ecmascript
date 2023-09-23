var str="hlo ji kaise ho ap"
 var savedStr=str.split(" ").map((word)=>{
    return word.split("").reverse().join("")
})

console.log(savedStr.join(" "));

// problem 2
// how to check if an object is an array or not?

