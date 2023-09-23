//  this refer to the current context
// when we are in node enviroment then this return a {} empty object
// in  browers  this refer to windows object
/*
const user ={
    username:"indrajeet",
    price:999,

    welcomeessage:function(){
        // console.log(`${this.username},welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeessage()
user.username="sam"
user.welcomeessage()

*/
// ##########################################
// Arrow function
/*
function chai(){
    let username="indrajeet"
    console.log(this.username);
}
chai();
// output undefind
// we can not use {this} inside a function to access any value
*/

// ###################################
// const chai =()=>{
//     let username ="indrajeet"
//     // console.log(this .username);
    
// }
// chai()
// we are to access {this} value inside arrow functions

// implicit return
// const addTwo =(num1,num2)=>num1+num2
// const addTwo =(num1,num2)=>(num1+num2)


// 
// +++++++++++++++++++++++++++++++++++++++++++++++//
// immediately Invoked function expressions(IIfe)
// 
// named iffe
( function coffee(){
    console.log('db connected');
    
})();

// parmetr iffe/without name iffe

((name)=>{
    console.log(`myname ${name}`);
    
})("indrajeet")
