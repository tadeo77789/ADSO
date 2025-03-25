/*
	name exercise: Area square
	description: squares
	autor: Luis Alejandro Duarte Aldana
	date: 21/03/2025
*/

let squareSide1=4;
let squareSide2=5;
let squareSide3=9;

let area1=squareSide1*squareSide1;
let area2=squareSide2*squareSide2;
let area3=squareSide3*squareSide3;

if(area1==area2 && area1==area3){
	console.log('All square are equals');
}else if(area1==area2 && area1>area3){
	console.log('Square 1 and squeare 2 are the graters');
}else if(area2==area3 && area2>area1){
	console.log('Square 2 and squeare 3 are the graters');
}else if(area3==area1 && area1>area2){
	console.log('Square 1 and squeare 3 are the graters');
}else if(area1>area2 && area1>area3){
	console.log('Square 1 is the graters');
}else if(area2>area1 && area2>area3){
	console.log('Square 2 is the graters');
}else{
	console.log('Square 3 is the graters')
};