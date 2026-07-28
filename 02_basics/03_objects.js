//singleton
//object.create


//objects literals

const mySym = Symbol("key1")


const JsUser = {
    name: "varsha",
   "FullName" : "Varsha Yadav",
   [mySym] : "mykey1",       //it wont show error here but its datatype will be diff
    age: 18,
    email: "varshayadav38905@gmail.com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "saturday"],
}
console.log(JsUser.email);   
console.log(JsUser["lastLoginDays"]);
console.log(JsUser["FullName"]);   // we cant access it with "." method
console.log(JsUser[mySym]);

JsUser.email = "varsha389@gmail.com"   // this is how we change something in object

//if we dont want the change then we use "freeze"
//Object.freeze(JsUser)
JsUser.email = "varsha@gmail.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello js user ");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


