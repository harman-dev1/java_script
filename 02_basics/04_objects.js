// how to make objects singleton 
//const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "harman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email :"h@gmail.com",
    fullName : { //full name is a object in itself
        userFullName : {
            firstName : "Harman",
            lastName : "Rick",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


//combining objects
const obj1 = {1 :"a", 2 :"b"};
const obj2 = {3 :"c", 4 :"d"};
const obj4 = {5 :"e", 6 :"f"}

// const obj3 = Object.assign({} ,obj1, obj2, obj4) // now all objects combine and go in empty object then go in obj3 if we don't use {} then all element will assign to first object and first object changes then Object.assign(obj1, obj2, obj4) obj1  will contain both 3
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4} // spreding method to concat
// console.log(obj3);

// From database values come in array form
const user = [
    {
        id :'1',
        email :"12@gmail.com"
    },
    {
        id :'2',
        email :"123@gmail.com"
    },
] 

user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // data type is array
// console.log(Object.values(tinderUser)); // data type is array

// console.log(Object.entries(tinderUser)); // each key value converts in to array :[ [ 'id', '123abc' ], [ 'name', 'harman' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // property is available or not


//Object De-struture
const course = {
    courseName :"Js",
    price : "99",
    courseInstructor :"Hitesh",
}

console.log(course.courseInstructor)
const {courseInstructor } = course // can also access like this
const {courseInstructor : instructor } = course // can destructure 
console.log(instructor)
 