const accountId = 17786
let accountEmail = "sourav@google.com"
var accountPassword ="12345"
accountCity = "Koraput"
let accountState ;


// accountId = 2 not allowed
accountPassword ="3456"
accountEmail = "sp@.com"
accountCity="jeypore"

console.log(accountId);
/*

prefer not to use var, beacuse of issue in
block scope and functional scope

*/

console.table([accountEmail , accountId , accountPassword , accountCity , accountState])