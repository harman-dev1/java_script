// const userEmail = "h@harman.gpt"

// if (userEmail) { // we are not checking condition so this is called truthy or falsy
//     console.log("Got User Email");
    
// } else {
//     console.log("Don'thave use user email");
    
// }

//*****************++++++++++++++++++ */
// const userEmail = "" // if string is empty then else block will run

// if (userEmail) { // we are not checking condition so this is called truthy or falsy
//     console.log("Got User Email");
    
// } else {
//     console.log("Don't have use user email");
    
// }

//*****************++++++++++++++++++ */

// const userEmail = [] // if array is empty then if block will run

// if (userEmail) { // we are not checking condition so this is called truthy or falsy
//     console.log("Got User Email");
    
// } else {
//     console.log("Don't have use user email");
    
// }

//falsy values
/*
 *false
 *0
 *-0 
 * BigInt  0n
 * ""
 * null
 * undefined
 * NAN 
 */

// truthy values
/**
 * true
 * "0"
 * "false" or 'false'
 * []
 * {} // empty object
 * " "
 * function(){} // empty function
 */

const emptyObject = {}
if(Object.keys(emptyObject). length == 0) { // way to check if object is empty or not
    console.log("Object is empty");    
}

/** all answer are true
false == 0
false == ''
0 == ''
 */

//Nullish coalescing operator (??)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// console.log(val1);


//Terniary operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less");

