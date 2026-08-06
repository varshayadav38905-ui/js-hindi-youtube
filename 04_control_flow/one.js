// if
// const isUserLoggedIn = true
/*const temperature = 41

if(temperature < 50){
    console.log("less than 50");
}  else{
console.log("temperature is greater than 50");
}
console.log("executed"); */

//   <, >, <=, >=, !=, ===, !== 


/*const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
} */

const balance = 1000

//if(balance > 500) console.log("test");   //  here we didnt used scope "{}" , it is implicit scope. should be executed in single line only

// nesting

/*if(balance < 500){
    console.log("less than 750");

}else if (balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
}*/

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("allowed for shopping");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in ");
}
