/*
	Name exercise: vector
	Description: vector
	Autor: Luis Alejandro Duarte Aldana
	Date: 20/03/2025
*/

let vector =[1,2,3,4,5,6,7,8,9];
let mayor = mathmax(...vector);
let menor = mathmin(...vector);
console.log("mayor"+mayor);
console.log("menor"+menor);
let pares =vector.filter(number=>number%2==0)
let impares =vector.filter(number=>number%2!==0)
console.log("pares"+pares);
console.log("impares"+impares);