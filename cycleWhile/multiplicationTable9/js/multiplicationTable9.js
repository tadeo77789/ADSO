/*
	name exercise:Multiplication table of nine
	description: Multiplication table
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/
let counter=0;
let number=9;
let product;

while(counter<5){
	counter=counter+1;
	product=number*counter;
	if((product % 2)==0){
		console.log(number+"*"+counter+"="+product+ "    Even");
	}else{
		console.log(number+"*"+counter+"="+product+ "    odd");
	};
};