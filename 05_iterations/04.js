// for in loop for iteration of object is used 
// for in gives us key
const myObject = {
    js :"JavaScript",
    cpp :"C++",
    rb : "Ruby",
}

for (const key in myObject) {
    // console.log(`${key} shorcut is for ${myObject[key]}`);
    
}

const programming = ['c++', 'c', 'c#', 'java'];
for (const key in programming) {
    console.log(programming[key]);
    
}

// 'for in' can not be used for iterations of map 

// const map = new Map();

// map.set('IN', "India");
// map.set('USA', "United State of America");
// map.set('FR', "France");
// map.set('FR', "France");

// for (const key in Map) {
//     console.log(key);
// }

/*****************/
