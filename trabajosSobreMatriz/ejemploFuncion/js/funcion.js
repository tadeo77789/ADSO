/*	
	name:Function
	autor:Luis Alejandro

*/
let number;
function evenOdd(number){
	if(number%2 ==0){
			evenOdd="Even";
	}else{
			evenOdd="Odd";
	};
	return evenOdd;
};

number = prompt("Insert a number")

console.log(The number ${number} is ${evenodd(number)});