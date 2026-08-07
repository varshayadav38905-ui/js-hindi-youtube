const userEmail = []

if(userEmail){
    console.log("got user email");
} else{
    console.log("don't have user email");
}

// falsy values : 
 // false, 0, -0, BigInt, "" , null, undefined, NaN, 0n

// truthy values :
// "0", 'false', " ", [], {}, function(){}
 
if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator(??) : null undefined

let val2;
val2 = null ?? 10
val2 = nul ?? 10 ?? 30
console.log(val2);


//Terniary operator

condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


