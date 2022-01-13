"use strict";
// Funciones en TypeScript
// Usamos TS, definimos tipos para paramentros
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
createPicture('My Birthday', '2021-01-07', '500x500');
// createPicture('Colombia', '2020-03-20');  --> Error
// Parametros opcionales
function createPicture2(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
// Flat Array Function
let createPic = (title, date, size) => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};
const picture = createPic('Triplemania AAA', '2021-01-07', '100x100');
console.log(picture);
