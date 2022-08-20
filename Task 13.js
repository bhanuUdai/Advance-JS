
// let count=3 // if i uncomment it, it has no effect of count inside

let button=document.querySelector('#click_me');

function eventCreater()      // here we create a function which form a closure. Main motive to form this closure is that we have to count number of time button is clicked
                             // i.e we will put count inside this closure so that cannot access from outside, i.e if we declare count again outside this closure, the value of count inside closure refrenhce will remain unchange(kind of security)
{
   
    let count=1
    
    button.addEventListener('click',DOMCONTENTLOADED)
    function DOMCONTENTLOADED(e)
    {
        console.log('DOM has loaded',count++)
    }
}

eventCreater()





// let count=3 // if i uncomment it, it has no effect of count inside


//Question:-

// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })

// Solution:-

// inside x

// timer2 expired

// inside y

// timer1 expired



// Here

// 'timer 1expired' placed in call back queue with timer 1sec

// 'timer 2 expired' also placed in call back queue with timer 0ms

// Now function x( ) will evoked

// initially it will print 'inside x'

// then parameter y contain function y( ) will evoked, it has settimeout i.e will placed in call back queue

// now 'timer 2 expired' again placed in call stack because its execution is only 0ms and get printed

// again 'inside y' will be put inside call stack and executed

// At last 'timer1 expired' will be executed bt putting in call stack because it has timer of 1sec

