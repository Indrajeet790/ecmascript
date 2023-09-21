// Primitive datatype
// 7 type : String,Number,boolean,null,
// undefined,symbole,BigInt

// Reference type||(non-premitive)
// Array,Objects,Function


// #######################+++++++++++++++++++++++++++//
// Stack and Heap memory in javascript
// stack memmory(primitive) ,Heap memory(non-primitive)
 let myName="indrajeet"
 let anotherName=myName;
 anotherName="vijay"
//  console.log(myName);
 console.log(anotherName);


 let user = {
    email:"user@google.com",
    upi:"7903605302@ybl"
 }
 let userTwo = user

 userTwo.email="vijay123@gmail.com"
 console.log(user.email);
 console.log(userTwo.email);
 
 
 