class papa{
  constructor(name , age ){
     this.name = name;
     this.age = age;
  }

introduce(){
  //console.log(my name is ${this.name})
}
  
  
}
class bacha extends papa{
  constructor(name, age, branch){
    super(name ,age); // super keyword
    this.branch = branch;
  }
  introduce(){
    super.introduce();
    console.log(`my name is ${this.name} , I'm ${this.age} old and i study ${this.branch}`)
  }
}
const bacha1= new bacha("varsha", 22, "ece")
bacha1.introduce();

//inheritance and super keyword