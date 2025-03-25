/*
	name exercise: Average Age
	description: average age
	autor: Luis Alejandro Duarte Aldana
	date: 21/03/2025
*/


let ageOne=22;
let ageTwo=20;
let ageThree=18;
let averageAge;

if(ageOne>=18){
	console.log('Person one is legal');
}else{
	console.log('person One isnt legal');
};
if(ageTwo>=18){
	console.log('Person two is legal');
}else{
	console.log('person two isnt legal');
};
if(ageThree>=18){
	console.log('Person three is legal');
}else{
	console.log('person three isnt legal');
};

averageAge=(ageOne+ageTwo+ageThree)/3;
console.log(averageAge);

if(averageAge>=18){
	console.log('The group are legal');
}else{
	console.log('The group arent legal');
};