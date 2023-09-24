//  add array element and print sum
/*
var arr =[1,2,3,4,5,6,7]
var sum=0

arr.forEach((ele)=>{
    sum= sum+ele

})
console.log(sum)
*/

//  mix of string and number array find number and print the sum of number
/*
var arr =["hehehehedfghj",123,"dfgh",1234654,"lkjhgf"]
var sum =0; 
arr.forEach((ele)=>{
    if(typeof ele === "number"){
        sum = sum+ele;
    }
 })
 console.log(sum);
 */


//  loop an array of object and remove all objects
// which don't gender's value male

var arr =[
    {name:"indrajeet",gender:"male"},
    {name:"vivek",gender:"male"},
    {name:"rani",gender:"female"},
    {name:"seema",gender:"female"},
    {name:"ranjeeet",gender:"nonspecified"}
]
// var newArr=arr.filter((ele)=>{
//     return ele.gender === "male"
// })
// console.log(newArr)

// 2nd method

// count first who are not male
var count =0;
const notMale=arr.forEach((ele)=>{
    if(ele.gender !== "male") count++
    
})
console.log(notMale);

