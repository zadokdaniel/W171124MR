const cowsay = require("cowsay"); // node moudles
const osInformation = require("./osInformation"); // custom modules

console.log(osInformation.getOSRunTime());
console.log(osInformation.getMemory());

console.log(
  cowsay.say({ text: `${Math.ceil(osInformation.getOSRunTime())} mins` })
);

// console.log("uptime (mins)", os.uptime() / 60);
// console.log("free", os.freemem() / 1024 / 1024);
// console.log("total", os.totalmem() / 1024 / 1024);
// console.log("free (percent)", (os.freemem() / os.totalmem()) * 100);

/**

1. create a new project
2. log out the amount of time the os is running in minutes
3. log out the amount of memory used, free memory and percent available "55MB/55555MB (57% available)"
4. create a module (osInformation) which exports 
    - getMemory - will return the free memory the used memory percent available (MB)
    - getOSRunTime - will return a number saying how long the os is running (minutes)
5. use the osInformation to show the logged information
6. use cowsay to show how long the system is running instead of a simple console.log
 */
