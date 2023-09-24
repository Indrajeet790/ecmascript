//  add array element and print sum
/*
var arr =[1,2,3,4,5,6,7]
var sum=0

arr.forEach((ele)=>{
    sum= sum+ele

})
console.log(sum)
*/

// 
var arr =["hehehehedfghj",123,"dfgh",1234654,"lkjhgf"]
var sum =0; 
arr.forEach((ele)=>{
    if(typeof ele === "number"){
        sum = sum+ele;
    }
 })
 console.log(sum);
 