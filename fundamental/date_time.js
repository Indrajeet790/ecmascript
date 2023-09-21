
// dates

// let myDate =new Date();

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// timesstamps

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000));

let newDte = new Date();
console.log(newDte);
console.log(newDte.toISOString());
console.log(newDte.getDate());
console.log(newDte.getDate());

console.log(newDte.toLocaleString("default", {
    weekday: "long",

}));



