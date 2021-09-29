const laurie = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${laurie.name}, I'm from ${laurie.campus}`
})) 
