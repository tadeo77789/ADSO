/*
    Name exercise: matriz
    Description: Calcula la matriz de aceleraciones dividiendo por columnas en lugar de 	filas.
    Autor: Luis Alejandro Duarte Aldana
    Date: March 15th 2025
*/

const forces = [
    [10, 5, 0], 
    [4, -3, 2], 
    [0, 0, 6]
];

const mass = [2, 4, 3];

let acceleration = [];

for (let col = 0; col < 3; col++) {
    let accelerationColumn = [];
    for (let columns = 0; columns < 3; columns++) {
        accelerationColumn.push(forces[columns][col] / mass[col]);
    }
    acceleration.push(accelerationColumn);
}

console.log("Acceleration matrix (column division):");
console.log(acceleration);
