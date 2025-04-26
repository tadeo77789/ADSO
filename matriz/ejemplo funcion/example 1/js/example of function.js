/*
	Name exercise: Example of function
	Description: Example of function
	Autor:Luis Alejandro Duarte Aldana
	Date: March 30th 2025
*/
function calcularFuerza(masa, aceleracion){
	return masa*aceleracion;
}

let m=10;
let a=2;
console.log(`Fuerza:${calcularFuerza(m,a)} N`);
