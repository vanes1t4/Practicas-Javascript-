/*****************************
 callback - me obliga a esperar la respuesta que tenga la base de datos, no me deja avanzar. Dependo de esa respuesta para saber si puedo o no continuar. Es la llamada a una funcion como parametro o argumento de otra funcion. 

Async - me requiere a tomar algo de tiempo

Ejemplo: la busqueda de vuelos, la orden de pizzas.
Existe el destino, existe vuelos disponibles, que horarios, que clases, que asientos, etc para calcular al final el costo del boleto
Exsite sucursal cerca, esta disponible, tiene la especialidad que buscas, tiene el tamaño que buscas, que refrescos o acompañantes puede llevar, para decirte si o no puedes pedirla

Se debe cuidar el orden en que fue invocada la callback: ya deben existir las funciones o resultados que se estan utilizando

***********************/

const paises = ['Francia', 'Holanda', 'Mexico', 'Argentina', 'Canada']

//manejo de callback
//callback no es una palabra reservada, puede ser cambiada por
//algun nombre, en este caso agregaPais
function nuevoPais(pais, paisAgregado) {
    setTimeout(() => {
        paises.push(pais)
        console.log('************')
        paisAgregado();
    }, 2000)
}


function mostrarPaises() {
    //que tarde en mostrarme la info
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        });
    }, 2000)
}

//AMBAS SE COMENTArian PARA EL EJERCICIO DE HELL
mostrarPaises()
    //mostrarPaises se esta mandando como callback
nuevoPais('Alemania', mostrarPaises)


/*iniciando el ejemplo de callback hell (infernales)
//aqui solo son tres llamadas y estan controladas
//pero es MALA PRACTICA! no debe generarse este tipo de estructura
callback hell - terminan siendo funcion que llama a otra y asi sucesivamente, son muchas llamadas y puede perderse. No es la mejor practica. 

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Estados Unidos', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Bulgaria', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Australia', mostrarPaises)

            }, 2000)
        }, 2000)
    }, 2000)
}

iniciarCallbackHell()  */