// array

const myArr = [0 , 1 , 3 , 4 , 5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 ,2 , 4 , 5 )

console.log(myArr[3]);

//Array Methods
myArr.push(6)
myArr.pop()          // we dont need to give any value , it just removes the last value
myArr.unshift(2)    // adds element in front
myArr.shift()      //remove element from the front 

console.log(myArr.includes(5));       //give result in true or false
console.log(myArr.indexOf(4));       //gives the index of that element


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice and splice
 console.log("A" , myArr);
const myn1 = myArr.slice(1 , 3) 

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1 , 3)
console.log(myn2);
console.log("C" , myArr);





