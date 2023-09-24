// Array   
// problem:1 :=> write a javscript function to clone an array

// function cloneArr(arr){
//     return arr
// }
// const newArr=cloneArr([1,2,3,4,5,6])
// console.log(newArr);

// step 2
function clone(arr){
    var newarr =[]
    arr.forEach((element )=> {
        newarr.push(element);
        
    });
    return newarr;
}
var sdfgh =[1,2,3,4]
var newArr=clone(sdfgh)
newArr.pop()
console.log(newArr)

