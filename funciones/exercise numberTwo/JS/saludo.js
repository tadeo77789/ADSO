/*  
    name: Greeting Function  
    description: Receives a name and age and returns a greeting  
    author: Luis Alejandro Duarte Aldana  
    date: 30/03/2025  
*/

function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

let name = prompt("Insert your name");
let age = prompt("Insert your age");

console.log(greet(name, age));
