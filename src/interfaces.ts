// INTERFACES
/* Las interfaces una forma poderosa de definir 'contratos' tanto para tu proyecto, como para el codigo externo */

// Funcion para mostrar una Fotografia
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}
interface Picture {
    title: string
    date: string
    orientation: PhotoOrientation
}
function showPicture(picture: Picture) {
    console.log(
        `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
    )
}
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape,
}
showPicture(myPic)
showPicture({
    title: 'Test Title',
    date: '2022-01',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'   // --> Error
}) // objecto anonimo

interface PictureConfig {
    title?: string
    date?: string
    orientation?: PhotoOrientation
}
function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2022-01' }
    if (config.title) {
        pic.title = config.title
    }
    if (config.date) {
        pic.date = config.date
    }
    return pic
}
let picture = generatePicture({})
console.log('picture : ', picture)
picture = generatePicture({ title: 'Travel Pic' })
console.log('picture : ', picture)
picture = generatePicture({ title: 'Travel Pic', date: '2012-05' })
console.log('picture : ', picture)

// Interfaz: usuario
interface User {
    readonly id: number // solo lectura
    username: string
    isPro: boolean
}
let user: User
user = { id: 10, username: 'CalicheOrozco', isPro: true }
console.log('user : ', user)
user.username = 'Auronplay'
// user.id = 20; // --> Error
console.log('user : ', user)
