const accountId = 155553;
let accountEmail = "harmanrick81@gmail.com";
var accountPassword = "12345";
accountCity = "Pattoki"
let accountState;

// accountId = 134 // you can not re-assign const value 

accountEmail = "hchc@gmail.com";
accountPassword = "212112";
accountCity = "LHR";

/* 
Prefer not to use var
bcuz of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
