/*
	name exercise:Force with for
	description:
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let mass;
let force;
let acele;
let number=0;
let counter=1;

number = prompt("Insert the number of times you want to perform the operation")

for(counter==1; counter<=number; counter++){
	mass = prompt("Insert mass");
	acele = prompt("Insert aceleration"),
	
	force = mass*acele;
	console.log("The force "+counter+" is "+ force);
};