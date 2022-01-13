// ------- Tipo: Array -------

// Explicito
let users: string[]
users = ['CalicheOrozco', 'Auronplay', 'LAPark']
// users = [1, true, 'test']; // --> Error

// Inferido
let otherUsers = ['CalicheOrozco', 'Auronplay', 'LAPark']
// otherUsers = [1, true, 'test']; // --> Error

// Array<tipoDato>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Match', 'Vacation Time', 'Wrestler Mexican Mask']

// Accediendo a los valores en un Array
console.log('first user : ', users[0]) // --> users[indice]: luixaviles
console.log('first title : ', pictureTitles[0])

// Propiedades en Array
console.log('users.length : ', users.length) // -> Tamaño del Array

// Uso de funciones en Arrays
users.push('WWE wrestler') // -> agrega dato a la cola del Array
users.sort() // --> ordena el Array de menor a mayor (alfabetica)
console.log('users', users)
