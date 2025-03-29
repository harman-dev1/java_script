const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val);
}

const greeting = "Hello World";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps
//**** Maps Hold Unique value
// and they hold values in which they are given   */
const map = new Map();

map.set('IN', "India");
map.set('USA', "United State of America");
map.set('FR', "France");
map.set('FR', "France");
// console.log(map);

for (const key of map) {
    // console.log(key); 
}
for (const [key, value] of map) {
    // console.log(key, " :-", value); 
}

/// For loop on object
const myObject = {
    game1 :"Need for speed",
    game2 :"GTA 5"
}

for (const [object] of myObject) { // myObject is not iterateable through for of
    console.log(object);
    
}
