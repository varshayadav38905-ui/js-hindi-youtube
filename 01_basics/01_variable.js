const accountId = 14435
let accountEmail = "varshayadav38905@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

//accountId = 2//not allowed
accountEmail = "vrsa35@gmail.com"
accountPassword = "3855889"
accountCity = "banglore"
console.log(accountId);


//prefer to use var because of the issue of BLOCK SCOPE and Function Scope


console.table([accountId,accountPassword,accountEmail,accountCity,accountState])

// if we declare any variable and doesnt assign any value to it then javascript consider it as undefined . eg. accountState//

// conclusion lect 4: we cant change the const , it is fixed; we prefer to use var and not let due to the issue of block scope and functional scope//