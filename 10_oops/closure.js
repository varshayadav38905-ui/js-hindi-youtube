// closure : inner function oute function k variables ko hmesa yaad rkhta h jaise varsha hmesa annu ko yaad rkhti h
function annu(){
  let name = "babu"

  function varsha(){
    console.log(name)
    
  }
  return varsha
}
const myFunction = annu(); // returned function ko store krna pdta h 
myFunction();


// lexical scoping : inner function can access outer function's variable but vice versa is not true


let student ="varsha"

function introduce(){
  let age= 22
  let college= "uiet"
  

  function personalDetails(){
    let isSingle= "yes"
    let gender = "female"
    console.log(college)
    console.log(gender)
  }
  personalDetails()
  //console.log(gender)
  
  
}
introduce()