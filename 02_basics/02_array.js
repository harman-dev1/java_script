const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes =  ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes) // it consider 2nd array as data and append at last so array with in another array 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]); 

const all_heroes = marvel_heroes.concat(dc_heroes) 
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //... is called spread if you do this then array elements will become sperate like you drop glass and it spread
// console.log(all_new_heroes);//spread is just like concat but in concat you can only use two arrays but in spread you can use multiple arrays

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity) // flat just flat whole array even multi dimensional arrays infinty means each dimensonal will be flatten
// console.log(realAnotherArr);

//****For scraping purpose
console.log(Array.isArray("Harman")); // tell wether it's array or not
console.log(Array.from("Harman"));// it makes anything array
console.log(Array.from({ name : "Harman"}));// if it not able to make array then it will give empty array;;;;; for this sceniro we have to tell to make array for keys or for value to create a array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3 , ['ghg', 2])); // make array for anything including variable unlike from
