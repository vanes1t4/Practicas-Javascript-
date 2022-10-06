/* es por default un CALLBACK
//promesa cumplida - se logro
//promesa rechazada - no se logro
//promesa pendiente - se puede alcanzar???

resultados:
- resolve = aceptada, cumplida
- rejected = rechazada, no cumplida
- pending = aun no se cumple pero tampoco ha sido ejecutada

metodos:
- then = se realizo? entonces que hara la promesa
- catch = no se pudo completar, por?
- finally =

*************/

const aplicarDEsc = new Promise((resolve, reject) => {
    const descuento = true
    if (descuento) {
        resolve('Descuento aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDEsc.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

/**
 * utilizando promesas con funciones
 */

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`- Agregado ${pais}`)
    }, 2000)
})

nuevoPais('España')
    .then(resultado => {
        console.log(resultado)
        console.log('*********')
        console.log(paises)
        return nuevoPais('Bruselas')
    })
    .then(resultado => {
        console.log(resultado)
        console.log('*********')
        console.log(paises)
        return nuevoPais('Alemania')
    })
    .then(resultado => {
        console.log(resultado)
        console.log('____________')
        console.log(paises)
    })