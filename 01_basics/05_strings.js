const name = "varsha"
const repoCount = 50

//console.log(name + repoCount + "value"); // old method of writing a string ..dont use it anymore 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new method , good for representation


const gameName = new String('vrsa-hc-yadav')   // this is how we declare string
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());    // it didnt changed the original string as we studied about stack and heap mem
console.log(gameName.charAt(2));       // which character is at which index
console.log(gameName.indexOf('s'));    //index of the character


const newString = gameName.substring(0, 4)  //last index wont be included // substring doesn't obey negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // we can reverse the string by giving negative value
console.log(anotherString); 

const newStringOne = "     hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove extra space

const url = "http://varsha.com/varsha%20yadav"   //the browser doesnt understand space
console.log(url.replace('%20' , '-')); // replaces
console.log(url.includes('sundar'));  //does string includes this character or not  


//suppose we need to seperate the string on the basics of some spaces or - , then we will use split
console.log(gameName.split('-'));







