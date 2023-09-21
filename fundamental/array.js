// const array = [1,2,3,4,5];
// const myHeros = ["ironman","Thor"]

// const arr2 = new Array(1,2,3,4)
// console.log(array[1]);

// Array METHOD
// array.push(6);
// array.push(8);
// array.pop()
// console.log(array);



// shift and unshift
// array.unshift(7)
// array.shift()
// console.log(array);

const marvel_heros= ["thor","ironman","captain"]
const dc_heros=["sktiman","sonpari","black_panther"]

// push method using
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// concat method
// const AllHeros=marvel_heros.concat(dc_heros)
// console.log(AllHeros)

// spread oprator
const all_new_Heros=[...marvel_heros,...dc_heros]
console.log(all_new_Heros);


// const another_array= [1,2,3, [4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

// 
console.log(Array.isArray("INDRAJEET"))
console.log(Array.from("Indrajeet"))

//  multiple value can bind into a single array
let score1 =200
let score2=300
let score3 =400

console.log(Array.of(score1,score2,score3))


