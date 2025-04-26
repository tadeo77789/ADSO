/* 

	Name exercise: position simulation
	Description: position simulation using arrays and constant acceleration
	Autor: Luis Alejandro Duarte Aldana
	Date: March 30th 2025
*/

const acceleration= [2,1];
const initialVelocity= [4, 0];
const initialPosition= [0, 0];
const steps=5;
let iterationOne;
let iterationTwo;
let NetTime;
let time=0;
let positionsForTime;
let timeArray= [];

for(iterationOne=0; iterationOne<steps; iterationOne++){
	NetTime=[];
	time++	
	 for (let iterationTwo = 0; iterationTwo < 2; iterationTwo++) {
	positionsForTime= initialPosition[iterationTwo]+initialVelocity[iterationTwo]*time+(1/2)*acceleration[iterationTwo]*time*time;
	NetTime.push(positionsForTime);
	}
	timeArray.push(NetTime)
	
	
}
console.table(timeArray);
	

		
