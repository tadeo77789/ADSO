/*
	name exercise: Salary
	description: Salary
	autor: Luis Alejandro Duarte Aldana
	date: 20/03/2025
*/

let salary=2500000;
let discount;
let health;
let pension;
let arl;
let totalSalary;
let minSalary=1423500;
let transport;

if(salary>(minSalary*2)){
transport=114000;
}else{
transport=0;
};

health=salary*0.12;
pension=salary*0.16;
arl=salary*0.052;
discount=health+pension+arl;
totalSalary=(salary+transport)-discount;

if(totalSalary>(minSalary*4)){
	totalSalary=totalSalary-(totalSalary*0.08);
};
console.log(totalSalary)