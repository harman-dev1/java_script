// array

const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4)

// Array Methods

// arr2.push(6)
// arr2.push(9)
// arr2.pop()

//arr2.unshift(9) // add element at start of array
//console.log(arr2);
//arr2.shift() // remove element from start it's a reverse of pop()

//console.log(arr2.includes(1));

// const newArr = arr2.join()
// console.log(newArr); // in the form of string

// Slice, Splice

console.log( "A" , arr2);

const myn1 = arr2.slice(0,2)
console.log( "B" , arr2);
console.log(myn1);



const myn2 = arr2.splice(0,2) //splice manipulates original array unlike slice
console.log("C" , arr2)
console.log(myn2);