
// symbol
const mySym =Symbol("key1")

const jsUser = {
    name:"indrajeet",
    "fullName":"indrajeet kumar nayak",
    age:18,
    [mySym]:"mykey1",
    location:"ranchi",
    email:"abc123@gmail.com",
    isLogedIn:false,
    lastLoginDays:["monday","saturday"]
}
// dot noations
// console.log(jsUser.email);
// [] barcket notations method
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);


// update email
jsUser.email= "indrajeet234@gmail.com"
// Object.freeze(jsUser);
// jsUser.email= "indrajeet1111@gmail.com"

// console.log(jsUser)


// 
jsUser.greeting =function(){
    console.log( "hello js user")
}
console.log(jsUser.greeting())

jsUser.greetingtwo =function(){
    console.log( `hello js user, ${this.name}`)
}
console.log(jsUser.greetingtwo())

