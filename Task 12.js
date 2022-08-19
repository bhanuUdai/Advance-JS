

class student
{
  static i=0;
  constructor(name,age,phoneNumber,boardMarks)
  {
    this.name=name;
    this.age=age;
    this.phoneNumber=phoneNumber;
    this.boardMarks=boardMarks;
    student.i++;
  }

details()
{
  console.log(`student name is ${this.name} his age is ${this.age} having contact no. ${this.phoneNumber} scored marks ${this.boardMarks}`)
}
eligibility(x)
{
  if(this.boardMarks>x)
  {
    console.log(`${this.name} is eligible`)
  }
  else
  {
    console.log(`${this.name} is not eligible`)
  }
}

static counter()
{
  console.log(student.i)
}

//Here we are using function inside the method.If we use traditional function(i.e function(agE)) , it will give error that this.age is not defined
//Here come fat arrow, the main advantage of fat arrow over traditional function method is that 
//fat arrow can read this in lexical scope also(i.e in parent scope). where traditional function can only read in block scope

eligibleForPlacement(minMArks)
{
  return (agE)=>
  {
    if(this.boardMarks>minMArks && this.age>agE)
    {
      console.log(`${this.name} is eligible`)
    }
    else
    {
      console.log(`${this.name} is not eligible`)
    }
  }

  
}

}

let student1=new student('bhanu',25,9882299835,75);
let student2=new student('udai',25,9882299835,75);
let student3=new student('rahul',24,9882299835,75);
let student4=new student('lucky',17,9882299835,75);
let student5=new student('rana',21,9882299835,75);

// student1.details()
// student1.eligibility(40)
// student.counter()
student1.eligibleForPlacement(40)(18)
student2.eligibleForPlacement(40)(18)
student3.eligibleForPlacement(40)(18)
student4.eligibleForPlacement(40)(18)
student5.eligibleForPlacement(40)(18)

