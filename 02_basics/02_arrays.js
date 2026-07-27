const  marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros) // array in array
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // ... is spread ,it converts the array elements into indvidual strings
console.log(all_new_heros);

const another_array = [1, 2, 2, [3 , 4 , [5, 6]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("varsha")); 
console.log(Array.from("varsha"));
console.log(Array.from({name : "varsha"})); ///// ** interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

 

