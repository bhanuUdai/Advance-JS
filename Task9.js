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


//CURRING: IT WILL CREATE COPY OF ORIGINAL FUNCTION BUT WITH DIFFERNT PARAMETERS

//USING BIND
let multiple=function(x,y)
{
    console.log(x*y);
}

let multipletwo=multiple.bind(this,5);  //here (ignore this it point object in case of objects) 5 is x's parameter
multipletwo(2);                         // here 2 is y's parameter

let multiplethree=multiple.bind(this,5)
multiplethree(3)




//USING CLOSURE
let multi=function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}

let multitwo=multi(5)  // here 5 is x's parameter
multitwo(2)            // 2 is y's parameter

let multithree=multi(5);
multithree(3)