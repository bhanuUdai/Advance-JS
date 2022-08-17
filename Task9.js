let obj={num:10};

let detail=function(a,b,c)
{
    return this.num+a+b+c;
}

//call : with help of call we can attach function temporarily with object to give results
// functionName.call(objectName,parameter1,parameter2,parameter3)

let caLL=detail.call(obj,1,2,3);
console.log(caLL)

//apply : with use of apply we can use elements of array as functional parameters
//functionName.apply(objectName,arrayName)
let arr=[1,2,3]
let applY=detail.apply(obj,arr);
console.log(applY);

//bind : it is used to bind the function with the object
//functionName.bind(objectName);
//the variable binD here will store the binded function and object 
//therefor functional parameters are passed in variable during calling it
let binD=detail.bind(obj);
console.log(binD(1,2,3))

//printing student age using bind

let student={age:20};

let detail1=function()
{
    return this.age;
}

let AGE=detail1.bind(student);
console.log(AGE());