const name = "indrajeet"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const myName = new String("indrajeet-name")
console.log(myName.split("-"));
console.log(myName[0])
console.log(myName.__proto__)
console.log(myName.length);
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.indexOf("t"))

const myString = myName.substring(0,4)
console.log(myString);


const anotherString = myName.slice(-8,4);
console.log(anotherString)

const anotherStringOne = "  indrjeet  "
console.log(anotherStringOne)
console.log(anotherStringOne.trim())


const url="https://localhost.com/%20/indrajeet/nayak"
console.log(url.replace("%20","-"));

console.log(url.includes("indrajeet"));






