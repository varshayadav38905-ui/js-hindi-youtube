const names = ["varsha", "annu", "sidhu", "yadav" ]

//names.forEach(function(val) {
  //  console.log(val); 
//});

names.forEach( (item) => {
   // console.log(item);
})

function printMe(item){
   // console.log(item);
    
}
names.forEach(printMe)


names.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript" ,
        languageFileName: "js"
    },
    {
        languageName: "java" ,
        languageFileName: "java"
    },
    {
        languageName: "python" ,
        languageFileName: "python"
    },
]

myCoding.forEach((item) =>{

    console.log(item.languageName);
})