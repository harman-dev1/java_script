function sayMyName() {
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    
}

//sayMyName()

function addTwoNumbers(number1, number2) { // these are called parameters
    return (number1 + number2);
    
}

const result  = addTwoNumbers(5, 6) //these are called arguments
// console.log(result);

function loginUserMessage(userName = "sam") {
    return `${userName} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(100, 200, 300));


function calculateCartPrice(num1, num2 ,...num3) {
    return num3
}
// console.log(calculateCartPrice(100, 200, 300));

const user = {
    userName :"Harman",
    price : 19,
}
function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArray = [10, 20, 30, 40];

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
