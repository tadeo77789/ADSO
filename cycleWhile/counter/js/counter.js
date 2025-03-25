/*
	name exercise: counter
	description: counter
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let counter=0;
let number=5;
let acu=0;

while(counter<number){
	counter++;
	console.log(counter);
	acu=acu+counter;
	if(counter%2==0){
		console.log(counter + ' Is even');
	}else{
		console.log(counter + ' Is odd');
	}
};
console.log('Acumulador: '+acu)