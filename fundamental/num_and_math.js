
// number methods

const balance= new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const number=223.8976
console.log(number.toPrecision(4));

const otherNumber = 1000000000000
console.log(otherNumber.toLocaleString("en-IN"));

// ++++++++++++++++++++++++++++++++++++++++++++++
// math
console.log(Math);
// absolute
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.random())
console.log(Math.random()*10+1)
console.log((Math.random()*10)+1)

// set range
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)










