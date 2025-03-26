// singelton;;; if we declare objects like literal then it won't create singelton,,,, if it makes from constructor then it's a singleton

// Objects literal

const mySymbol = Symbol("key1") //how to add this symbol in object and print it

const jsUser = { // objects store in key value pair
    name :"Harman",
    "full name" : "Harman Rick", //if we try to access full name using dot method we can never access it
    [mySymbol] : "my key1",
    age :18,
    location :"LHR",
    email : "harman@gmail.com",
    isLoggedIn : false,
    lastLoginday : ["Monday" , "Saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser["email"]); // can access like this also
// console.log(jsUser[mySymbol]);

// Object.freeze(jsUser); //now after this we can not update any key value of object
jsUser['email'] = "harman@gpt.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Helllo Js User");   
}

jsUser.greetingTwo = function () {
    console.log(`Helllo  ${this.name}`);    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());