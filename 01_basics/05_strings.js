const name = "Harman"
const repoCount = 20


// console.log(name + repoCount + " val"); // outdated version for today's 

console.log(`My name is ${name} and my repo count is ${repoCount}`); //backTicks is used today's 

const gameName = new String("PES-e-football"); // can create string like this
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('S'));

const newString = gameName.substring(0, 2)
// console.log(newString);

// console.log(gameName.length);


const anotherString = gameName.slice(-12,10)
// console.log(anotherString);

const anotherStringOne = "    harman--M--G";
console.log(anotherStringOne.trim());


const url = "https://hiteshchoudhary/hitesh%20chahudry"
console.log((url.replace('%20', '_')));
console.log(url.includes('Harman'));

console.log(gameName.split('-'));
