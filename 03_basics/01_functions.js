   
 /*function myWord (){ 
    console.log("v");    //function's defination
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("a"); 
}
myWord()     // calling the function */

//function addTwoNumbers(num1 , num2){
//
  // console.log(num1 +num2);
//}

/*function addTwoNumbers(num1 , num2){

    let result = num1 + num2
    return result 
    console.log("varsha"); // it will never be executed ,,because after retrun nothing will be executed
    
}
const result = addTwoNumbers(3 , 4 )  // stored the result
console.log("Result:" , result);


function loginusermessage(username){
  if(!username){
    console.log("please enter a username");
    return
  }
  return `${username} just logged in`
}
console.log(loginusermessage()); */ //if we dont pass anything it will show undefined


  function calculateCartValue(...num1){  // without ... only one value will be printed
    return num1                          // rest operator 
  }

  console.log(calculateCartValue(200, 400, 500));
  
//another case
   function calculateCartValue(val1, val2, ...num1){ 
    return num1                          
  }

  console.log(calculateCartValue(200, 400, 500)); // expected output = [ 500 ]


  // object in function
  const user = {
    username : "varsha" ,
    price: 199
  }
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
  }
  //handleObject(user) 

  /*   another way  */
  handleObject({
    username : "sam" ,
    price : 399
  })     


  // arrays in function

  const myNewArray = [200, 400, 500 ,700]

  function returnValue(anyArray){
    return anyArray[2]
  }
 // console.log(returnValue(myNewArray));
 console.log(returnValue([200, 400 ,500 , 600])); // we can directly pass array here like object
