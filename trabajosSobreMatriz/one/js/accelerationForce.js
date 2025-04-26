/*
	Name exercise: matriz
	Description: matriz de fuerzas
	Autor: Luis Alejandro Duarte Aldana
	Date: 20/03/2025
*/
	let number;
	let acceleration;
	let matriz=[];
	let mass
const force=[
	[10,5,0],
	[4,-3,2],
	[0,0,6],
];
const mass=[2,4,3];

for(force=0;force<5;force++){
	let	object=[];
		for(mass=0;mass<5;mass++){
			number=Math.floor(Math.random()*100);
			object.push(number);
		}
	matriz.push(object);	
}
	console.log(matriz);