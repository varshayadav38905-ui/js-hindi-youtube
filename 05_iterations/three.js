
const myArray = ["varsha", "yadav", "annu"]

for (const names of myArray) {
   // console.log(names);
    
}

const name = "varsha yadav"
for (const letters of name) {
    //console.log(letters);
    
}

//map
const map = new Map()
map.set('In', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('In', "India")


console.log(map);

for (const [key, value] of map){
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'pubg',
    'game2': 'ps5'
}
for (const [key, value] of myObject) {  //objects are not iterable that means the loop wont work on it
   // console.log(key , ':', value)
}
