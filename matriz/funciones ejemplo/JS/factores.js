/*
    Author: Luis Alejandro Duarte Aldana
    Date: March 30th, 2025
*/
function calcularFuerza(m, a){
	return m * a;
}




let m = 10;
let a = 2;

console.log(calcularFuerza(m,a));


let numberOne;
let numberTwo;
let addResult;
let subtResult;
let multiResult;

function addition(numberOne,numberTwo){
	addResult = numberOne + numberTwo;
	return addResult;
}

function subtraction(numberOne,numberTwo){
	subtResult = numberOne - numberTwo;
	return subtResult;
}
function multi(numberOne,numberTwo){
	multiResult = numberOne * numberTwo;
	return multiResult;
}

addResult1=addition(12,23);
subtResult=subtraction(43,11);
multiResult=multi(3,5)

console.log("Resultado de la suma: ${addResult}");
console.log("Resultado de la resta: "+subtResult);
console.log("Resultado de la multiplicacion: "+multiResult);

console.log("operations: add: ${addResult} | Subst: ${subtResult} | Multi: ${multiResult}");
console.log("operations: add: "+ addResult +" | Subst: "+ subtResult +" | Multi: " + multiResult);