/*
    Name exercise: Force and Acceleration
    Description: Calculates the total net force and the acceleration vector using F = m * a.
    Author: Luis Alejandro Duarte Aldana
    Date: March 15th, 2025
*/
const forces=[
[5, 0],
[-2, 3],
[1, -1]
];

const mass= 2;


let iterationOne;
let iterationTwo;
let resultForce;
let acceleration;
let valueAcceleration;


for(iterationOne=0; iterationOne<3; iterationOne++){
	acceleration= [];
	resultForce=0;
	for(iterationTwo=0; iterationTwo<2; iterationTwo++){
	resultForce=forces[iterationOne][iterationTwo]+resultForce;
	
	}
	valueAcceleration= resultForce/mass;
	acceleration.push(valueAcceleration);
	console.log("The acceleration is:", +valueAcceleration, "m/sg^2");	
}


