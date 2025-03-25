/*
	name exercise:Force to move
	description:
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let force=0;
let number=0;
let counter=0;


number = prompt("Insert the number of times you want to perform the operation")

for(counter=1;counter<=number;counter++){

	force = prompt("Insert the force");
	if(force>0){
		console.log("Its on the move");
	}else{
		console.log("Is at rest");
	};
};
		