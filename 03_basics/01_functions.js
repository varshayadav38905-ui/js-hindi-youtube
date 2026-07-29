   
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

function addTwoNumbers(num1 , num2){

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
console.log(loginusermessage()); //if we dont pass anything it will show undefined


  