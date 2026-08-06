/*let a = 10;
const b = 20;
var c = 30;*/
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(a); //will show error
//console.log(b); //will show error
console.log(c); // c will be printed which is not good

let a = 300
if(true){
    let a =10
    console.log("inner:",a) //op :10 // this is block scope inside the if
}
console.log(a);  //op:300   //this is global scope


//NESTED SCOPE

function one(){
    const Username = "varsha"

    function two(){
        const website = "snapchat"
        console.log(Username); // we can access global scope in block scope but vice versa not true
    }
   // console.log(website)

    two()
}
one()


if(true){
    const username = "varsha"
    if(username === "varsha"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
}
//console.log(username);


/******************INTERESTING************************ */
 function addOne(num){
    return num+1
 }
 addOne(5)

 const addTwo = function(num){
    return num+2
 }
 addTwo()