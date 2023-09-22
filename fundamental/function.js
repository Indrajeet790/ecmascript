1.// function declaration
// paramerter
/*
function twoNumber(num1, num2) {
    return num1 + num2;

}
// argument
const result = twoNumber(3, 4);
// console.log('Result:',result);


// 

function loginUserMesssage(username = "gupta") {
    if (!username){

        console.log("please enter a username")
    return
    }
    return `${username} just logged in`
}
const user = loginUserMesssage()
console.log(user)
*/


// ++++++++++++++++++++++++++++++++++++++++++++

// rest operator
function calculateCartPrice(valu1,valu2,...num1){
    return num1

}
console.log(calculateCartPrice(200,300,400,500));




// ++++++++++++++++++++
// A object passed into a function
const user = {
    username:"indrajeet",
    prices:199,
}

function handleObject(user){
    console.log(`username is ${user.username} and price is ${user.price}`);
    

}
// handleObject(user)
handleObject({
    username:"vijay",
    price:299
})


// array paased into function
const myNewArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]))




