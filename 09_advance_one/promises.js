// sync function in promise
const promiseOne = new Promise((resolve, reject) => {
   console.log("varsha");
   
})
// async function in promise
let promise1 = new Promise(function(resolve, reject){
    setTimeout(function sayMyName(){
        console.log("my name is varsha ");
        
    },10000)
    resolve;
})

// then and catch concept

let promise2 = new Promise( (resolve, reject)=>{
    let success = true;
    if(success){
        resolve("promise successful");
    }
    else{
        reject("promise rejected");
    }
});

// promise2.then((message) =>{
//     console.log("then ka message is "+ message);
// }).catch((error) =>{
//     console.log("Error: " + error);
// })


// we can use  multiple "then" on single promise

promise2.then( function(message) {
    console.log( "message1: " +message);
    return "promise fulfilled second message";

}).then(function(message){
    console.log("message2: " +message);
    return "promise fulfilled third message";


}).then(function(message){
    console.log("message3:" +message );
    return"";

})



// Async Await
