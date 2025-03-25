/*
	name exercise:Multiplication table of 1 at 5
	description:
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let number=5;
let table=1;
let counter=1;
let product;
let even=0;
let odd=0;
console.log("Table 1")

while(table<=number){
	
	product=counter*table;
	if((product % 2)==0){
		console.log(table+"x"+counter+"="+product+"    buzz");
		even=even+1;
	}else{
		console.log(table+"x"+counter+"="+product+"    bass");
		odd=odd+1;
	};
	counter=counter+1;
	if(counter>5){
		table=table+1;
		counter=1;
		console.log("")
			if(table<=5){
				console.log("Table "+table)
			};
		
	};
};
console.log("")
console.log("odd: "+odd)
console.log("even: "+even)


