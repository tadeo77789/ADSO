/*
	Name exercise: Example two
	Description: Example two
	Autor:Luis Alejandro Duarte Aldana
	Date: March 30th 2025
*/

let numberOne;
let numberTwo;
let addResult1;
let subtResult;
let multiResult;

function addition(numberOne, numberTwo){
	addResult= numberOne+numberTwo;
	return addResult;
}
function subtraction(numberOne, numberTwo){
	subtResult=numberOne-numberTwo;
	return subtResult;
}
function multi(numberOne, numberTwo){
	multiResult= numberOne*numberTwo;
	return multiResult;
}
addResult1= addition(12, 23);
subtResult= subtraction(43, 11);
multiResult= multi(3, 5);

console.log(`addition: ${addResult}`);
console.log('Subtraction:' +subtResult);
console.log('Multiplication:' +multiResult);

console.log(`Operations: Add: ${addResult} | Subtraction: ${subtResult} | Multiplication: ${multiResult}`)


