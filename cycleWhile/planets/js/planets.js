/*
	name exercise:Planets
	description:Planets
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let weigth=0;
let mass=0;
let gravity=0;
let counter=0;
let totallyWeigth=0;
let option=0;

mass = prompt("Insert mass");

while(mass>0){
	console.log("Chose the number of the planet");
	console.log("1-Earth(9,81)");
	console.log("2-Mars(3,71)");
	console.log("3-jupiter(29,79)");

	while(option>3 || option<=0){
		option = prompt("1-3");
	};
	if(option==1){
		gravity=9.81;
		counter=counter+1;
		weigth=mass*gravity;4
		totallyWeigth=totallyWeigth+weigth;
		console.log("The weigth is: " + weigth);
	}else if(option==2){
		gravity=3.71;
		counter=counter+1;
		weigth=mass*gravity;
		totallyWeigth=totallyWeigth+weigth;
		console.log("The weigth is: " + weigth);
	}else if(option==3){
		gravity=24.79;
		counter=counter+1;
		weigth=mass*gravity;
		totallyWeigth=totallyWeigth+weigth;
		console.log("The weigth is: " + weigth);
	};
	
	mass = prompt("Insert mass");
	option=0;

	
};

console.log("The totally weiht is: " + totallyWeigth);
console.log("The counter is: " + counter);