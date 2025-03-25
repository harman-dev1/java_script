// Primitive
// 7 types : string, number, boolean, null, undefined, Symbol, BigInt
const score = 100
const isLoggedIn = true
const outSideTemp = null
let name;

const symbol = Symbol('123')

const bigNumber = 112736786546765456n
console.log(typeof bigNumber); // bigInt data type

//Reference (Non Primitive) //these have datatypes of object 
//Arrays, Objects, Functions
const heroes = ["harman", "patrick"]
let myObj = {
    name : "Harman",
    age : 22,
}
const fn = function () { // data type is a object function 
    console.log("Harman")
}

//https://262.ecma-international.org/5.1/#sec-11.4.3
