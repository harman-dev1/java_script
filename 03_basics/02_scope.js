//var c = 300
let a = 200;
if(true) {
    let a = 10;
    const b = 20;
    //var c = 30;// 'a' and 'b' is scope is only inside if but 'c' can be accessed outside
    // console.log("Inner" , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "Harman";
    function two() {
        const website = "YT"
        // console.log(userName);
    }

    //console.log(website);
    two();
    
}

one();


//++++++++++++++++++++ Interesting +++++++++++++++++//
console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// this is called hoisting
console.log(addTwo(6)) // now we can not access addTwo f(n) if we declare them like this then it will be error of intialization which means we can not access fn before declartion

const addTwo = function(num) { // variables can hold functions
    return num + 2
}
