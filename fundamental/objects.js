
// symbol
/*
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

?*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name ="viraj"
tinderUser.isLoggedIn =false;
// console.log(tinderUser)


// nested object
const regulerUser = {
    email:"abc@gmail.com",
    fullName:{
        userFullName:{
            firstName:"indrajeet",
            lastName:"nayak"
        }
    }
}
// console.log(regulerUser.fullName.userFullName);

// 
const obj1={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// 
// const obj3 ={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj4);

// using spread 
// const obj={...obj1,...obj2}
// console.log(obj);


const users = [
    {
        id:1,
        email:"indra@gmail.com"
        
    },{
        id:1,
        email:"indra@gmail.com"

    }

]

users[1].email
console.log(tinderUser)

// find keys and values
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
*/


// objects de-structuring

const course = {
    courseName:"j in hindi",
    price:"999",
    cousreInstuctor:"hitesh"
}
// console.log(course.cousreInstuctor)
const {cousreInstuctor:Instructor}=course
// console.log(cousreInstuctor);
console.log(Instructor);









