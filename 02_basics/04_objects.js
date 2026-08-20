const tinderUser = new Object()  //singeton object
           
tinderUser.id = "12345kdjf"
tinderUser.name= "varsha"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullName :{
        userfullname:{
            firstname: "abc" ,
            lastname : "xyz"
        }
    }
}
console.log(regularUser.fullName?.userfullname.firstname);


const obj1 = { 1: "a" , 2 : " b"}
const obj2 = {3: "d" , 4: "f"}

// const obj3 = { obj1 , obj2}
//const obj3 = Object.assign({}, obj1 , obj2 )
const obj3 = {...obj1, ...obj2 }  // spread
console.log(obj3);  // object k andr object aa jayeg


const users = [
    {
        id: 1,
        email : "v2234@gmail.com"
    },
    {
    },
    {
    },
]
 users[1].email  //we can access the values from the database

console.log(tinderUser);
console.log(Object.keys(tinderUser));  // Interesting
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename : "js in hindi ",
    price: "999",
    courseInstructor : "hitesh"
}
//course.courseInstructor
const{courseInstructor:instructor} = course  // destructuring of object
console.log(instructor);


 //JSON
 /*{
    "name" : "varsha" , 
   " coursename" : "js in hindi" , 
   "price"  : "free",} */
 


