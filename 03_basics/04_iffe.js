//Immediately invoked function expressions

(function chai() {//named iffe
    console.log("DB Connected");    
}) (); // we have to write ';' at end otherwise it won't know where to stop the context it will cause error and error is due to only semi-colon

(() => { // not named iffe
    console.log("DB Connected");    
}) ()