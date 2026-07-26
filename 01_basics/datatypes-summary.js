//#primitive datatypes (call by value: changes are made in copy)
 // 7 types : string, number, boolean, null, undefined, symbol,BigIn(scientific values)
  
 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);
 
const bigNumber = 1234567235n // this n is used to represent bigInt 

  

 // referance(non primitive) 
//Array, objects, Functions
const heros = ["shaktiman", "nagraj"]
 let myObj = {
    name: "varsha",
    age : 21,
}
// we can also treat function as variable in js 
const myFunction = function(){
    console.log("Hello World");
    
}
 console.log(typeof myFunction);//datatype of my function is object+function




  
 // ************************************************
 //              stack (primitive) and heap(non primitive)

 let myYoutubename = " varshayadav.com"
 let anotherName =  myYoutubename
 anotherName = "chaiaurcode" 

 console.log(myYoutubename);
 console.log(anotherName);

 let userOne ={
    email: "user@gmail.com" ,
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.upi = "varsha@ybl"

 console.log(userOne.upi);
 console.log(userTwo.upi);
 
 

 
