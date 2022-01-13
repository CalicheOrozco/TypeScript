// Tipo tuple
// Tuplas: permiten expresar un arreglo con un numero fijo de elementos

export {} // -> user ya fue declarado en otro archivo

// [1, 'user']
let user: [number, string] // -> user ya fue declarado en otro archivo
user = [1, 'Caliche']

console.log('user : ', user)
console.log('username : ', user[1])
console.log('username.length : ', user[1].length)
console.log('id : ', user[0])

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'AuronPlayas', true]
console.log('userInfo : ', userInfo)

// Arreglo de Tuplas
let array: [number, string][] = []
array.push([1, 'CalicheOrozco'])
array.push([2, 'Auron'])
array.push([3, 'LAPark']) // indice: 2
console.log('array : ', array)

// Uso de funciones array
// Auron --> Auronplay
array[1][1] = array[1][1].concat('play') // --> concatena
console.log('array : ', array)
