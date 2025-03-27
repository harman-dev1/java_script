const user = {
    userName :  "Harman",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website`); // 'this' keyword is used when you refer to current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user['userName'] = "rick"
// user.welcomeMessage()
// console.log(this); // if we run this on browser console it will show window object;;; but now  in node current context is empty object so you will see empty object

// function chai() {
//     // console.log(this); // in thsi you will get too much things
//     let userName = "harman";
//     console.log(this.userName); // you will get undefined cuz this don't work in function context
    
// }
// chai()

// const chai = function () {
//     let userName = "harman";
//     console.log(this.userName);    
// }
// chai()

const chai = () => {
    let userName = "harman";
    console.log(this);   // now in arrow function you can not get anything 
}

// chai()

// const addTwo = (n1, n2) => {
//     return {n1 + n2}
// } // this is called explicit return in which we use return

// const addTwo = (n1, n2) => n1 + n2

// const addTwo = (n1, n2) => (n1 + n2) // if we use like this then there is no need for return;;;; this is also called implicit return


// now let's suppose we want to return object
const addTwo = (n1, n2) => ({userName : "Harman" }) // we need to use parenthesis othwise we can not return object

console.log(addTwo());
