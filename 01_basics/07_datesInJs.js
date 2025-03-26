// Dates
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // month start from zero in JS
// let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 5)
// let myCreatedDate = new Date("2022-01-12")
let myCreatedDate = new Date("2022-01-12") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // time stamp use in polls quizzes when you check for milli second
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); //get time in milli-second

console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.toLocaleString('default',{
    //ctrl + space you'll get all properties
    weekday : "short"
}))
console.log(myDate.toLocaleString());
