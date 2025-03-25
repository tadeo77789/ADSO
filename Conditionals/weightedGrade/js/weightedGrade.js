/*
	name exercise: weightedGrade
	description: weightedGrade
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/
let gradeOne=2.0;
let gradeTwo=3.0;
let gradeThree=4.0;

let weightedGrade;


weightedGrade=gradeOne*0.2+gradeTwo*0.35+gradeThree*0.45;

if(weightedGrade>4.5){
	console.log("Top grade");
}
else if(weightedGrade>3.5 && weightedGrade<4.5){
	console.log("Good grade");
}
else if(weightedGrade>=3.0 && weightedGrade<3.5){
	console.log("Medium grade");
}
else if(weightedGrade>=1.0 && weightedGrade<3.0){
	console.log("Bad Grade");
};

console.log(weightedGrade)