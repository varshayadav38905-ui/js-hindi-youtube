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



// ************operations *******************
let value = 3 
let negValue = -value
//console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2); power*/

let str1 = "hello"
let str2 = " varsha"

let str3 = str1 + str2
console.log(str3);

/*console.log("1" + 2);
console.log(1 +"2");
console.log(1+2 +"2" );
console.log("1"+2 +2 );

/* if the first one is string ,then the rest of the numbers are treated as string too 
and if the last one is string then the first numbers are treated as numbers 
*/ 
//console.log(5 - 6 * 5 / 9); // prefer not to write code like this ,this looks messy
//console.log(true);
//console.log(+true); // this will give us "1"
//console.log(+"");  //  this will give 0

let num1, num2, num3,
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
