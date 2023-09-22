1.// function declaration
// paramerter
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
