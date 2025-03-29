const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = myNums.map( (num) =>  {
    return num + 10 
})
// console.log(result);

const resultArr = [];
myNums.forEach( (num) => {
    resultArr.push(num + 10)
});
// console.log(resultArr);

const myAns = myNums
.map( (num) => num * 10 )
.map( (num) => num + 1 )
.filter((num) => num >= 50 )

console.log(myAns);
