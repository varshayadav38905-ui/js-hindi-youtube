// dates

let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  */     // expected output = object

let myCreatedDate = new Date(2026 , 0 ,23 , 5 ,3 , 2) 
/*console.log(myCreatedDate.toLocaleString()); // expected o/p = jan 23,2026 (months starts with 0 in js)
let myCreatedDate = new Date("01-14-2026") // for specific format
console.log(myCreatedDate.toLocaleString());*/

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //converted milli seconds into seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//imp **
newDate.toLocaleString('default',{
    weekday : "long" ,
})











