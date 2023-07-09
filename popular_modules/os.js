const os = require("os");

// info about user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`)
console.log(`System uptime: ${os.uptime()/60} minutes`)

const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osInfo);