/*
	name exercise:Force and Acelleration
	description:
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/


let mass=0;
let aceleration=0;
let counter=0;
let totallyForce=0;
let force=0;

mass = prompt("Insert mass");
aceleration = prompt("Insert aceleration");

while(mass>=0 || aceleration>=0){
	force=mass*aceleration;
	console.log("The force is "+ force);
	mass = prompt("Insert mass: ");
	aceleration = prompt("Insert aceleration");
	counter=counter+1;
	totallyForce=totallyForce+force;
};
console.log("The counter is " + counter);
console.log("The totally force is " + totallyForce);
	