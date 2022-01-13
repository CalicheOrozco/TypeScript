// Funciones en TypeScript

// // Crear una Fotografia: JS
// function createPicture(title, date, size) {
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'
// Usamos TS, definimos tipos para paramentros
function createPicture(title: string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size)
}

createPicture('My Birthday', '2021-01-07', '500x500')
// createPicture('Colombia', '2020-03-20');  --> Error

// Parametros opcionales
function createPicture2(title?: string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size)
}

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size }
}

const picture = createPic('Triplemania AAA', '2021-01-07', '100x100')
console.log(picture)
