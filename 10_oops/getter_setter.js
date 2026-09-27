class Student {

    #marks;

    constructor(name, rollNo, branch, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
        this.#marks = marks;
    }

    // GETTER
    get marks() {
        return this.#marks;
    }

    // SETTER
    set marks(newMarks) {
        this.#marks = newMarks;
    }
}



//getter  and setters
class student{
  #marks;
  constructor(name,  subject, marks){
      this.name = name
      this.subject = subject
      this.#marks = marks

  }
  get marks(){    // to access the private parameters
     return this.#marks
  }
  set marks(newMarks){
   this.#marks = newMarks ;
    
  }

}
const student1 = new student("varsha",  "CS", 80)

console.log(student1.marks)
student1.marks= 100;
console.log(student1.marks) /// this is how we change the private parameters