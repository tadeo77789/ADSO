/*	
	name: Even or Odd
	description: Check if a number is even or odd
	author: Luis Alejandro Duarte Aldana
	date: 30/03/2025
*/

function evenodd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = Number(prompt("Insert a number")); 

console.log(`The number ${number} is ${evenodd(number)}`);
