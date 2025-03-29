const myNums = [1, 2, 3];

// const myTotal = myNums.reduce ( (acc, value) => {
//     return acc + value;
// },0)
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, intialValOfArr) => acc + intialValOfArr,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName :"js course",
        price :299,
    },
    {
        itemName :"python course",
        price :39,
    },
    {
        itemName :"datasciene course",
        price :599,
    },
]

const result = shoppingCart.reduce( (acc, obj) => acc + obj.price,0)
console.log(result);
