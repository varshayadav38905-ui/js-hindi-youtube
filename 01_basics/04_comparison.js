console.log(2 > 1);    // basic conversion
console.log(3 < 2);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);


console.log("2" > 1);  // datatype changed
console.log("02" > 1);


console.log(null > 0);  //false
console.log(null >= 0); //true
console.log(null == 0); //false
/*there is a specific reason behind this , an equality check == and >, < , >=, <= works differently .
comparisons convert null to a number ,trearing is as 0.
thats why null >= 0 , is true ...and if we talk about that == case,, in 
that case the null is not converted into 0 , and that is a special case
In JS , the comparison and equality check works differently
 */

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false
// NOTE : we should avoid these kind of conversions; # CLEAN CODE

// === strict check 
console.log("2" === 2);
