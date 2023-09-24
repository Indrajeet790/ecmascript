// Array   
// problem:1 :=> write a javscript function to clone an array

// function cloneArr(arr){
//     return arr
// }
// const newArr=cloneArr([1,2,3,4,5,6])
// console.log(newArr);

// method  2
// function clone(arr){
//     var newarr =[]
//     arr.forEach((element )=> {
//         newarr.push(element);
        
//     });
//     return newarr;
// }
// var sdfgh =[1,2,3,4]
// var newArr=clone(sdfgh)
// newArr.pop()
// console.log(newArr)

// methdo 3
function clone(arr){
    var newArr= arr.map((ele)=>{
        return ele
    })
    return newArr

}
var arr =clone([1,2,3,4])
console.log(arr)

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// problem 2:=> write a javscript  function to get the first
// element of an Array,passing a parameter "n" will return the first "n" element
//  of the array

