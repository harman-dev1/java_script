const coding = ["js", "c++", "c#", "c", "python"];

// coding.forEach(function (val) {
//     console.log(val);    
// })

//--------++++++++++

// coding.forEach( (item) => {
//     console.log(item);    
// } )

//--------++++++++++

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

//--------++++++++++

// coding.forEach( (val, index, arr) => {
//     console.log(index, val, arr);
// })

const myCoding = [
    {
        languageName :"Java Script",
        languageFileName :"JS",
    },
    {
        languageName :"Java",
        languageFileName :"java",
    },
    {
        languageName :"Python",
        languageFileName :"py",
    }
]

myCoding.forEach( (item, index) => {
    console.log(item.languageName);
    
} )