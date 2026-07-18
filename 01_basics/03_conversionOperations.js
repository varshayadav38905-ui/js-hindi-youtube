let score = null

console.log(typeof score);
console.log(typeof (score));
// if we write any number without "", then its type is number , but if we write it in "33", then it becomes a string.

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
 //from the line 7 we converted intoo number


/*"33" => 33
"33abc" => nan(not a number)
true =>1; false=> 0;
null=> 0;
undefined => nan;
*/ 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

 /* 1 => true ; 0 => false;
   "" => false
   "varsha" => true
 */ 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);