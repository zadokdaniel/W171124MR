const clc = require("cli-color");

console.log(clc.bgGreenBright.bold.red("hello"));

console.log(
  require("cowsay").think({
    text: "dd",
  })
);

/**
 * 
 * 
 * 

1. create a new project 
2. install cli-color and show some text in colorful colors
3. npx nodemon .
4. install nodemon devDependency
5. npx nodemon . 
6. install cowsay as global tool and show something on screen
7. install cowsay as dependency and make the cow say something in green
8. uninstall global cowsay 
9. run cowsay from node_modules


 */
