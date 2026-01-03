console.log(" Heello World, Backend Journey Begins!");

const os = require('os');

console.log("-------------------------");
console.log("User Name: " + os.userInfo().username);
console.log("OS Type:   " + os.type());
console.log("-------------------------");