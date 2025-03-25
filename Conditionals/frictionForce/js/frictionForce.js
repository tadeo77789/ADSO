/*
	name exercise: Friction Force
	description:
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let mass=5;
let gravity=9.81;
let friction=2;
let normalForce;
let frictionForce;

normalForce=mass*gravity*Math.cos(90);
frictionForce=friction*normalForce;

if(frictionForce>50){
	console.log("The friction force is higth")
}else{
	console.log("The friction force is Low");
};