
/*
Tipos de datos: let (assigna, cambia), const, BigInt, null, Symbol(únicos)
Tipos de variables: String, numero, boolean, null, undefined
para saber el tipo de las variables --> console.log(typeof alumno)
console.table
*/



//[Opción 1] renombramos y accedemos al campo que queremos
const nombre = producto.nombre
const precio = producto.precio
const disponible = producto.disponibilidad
console.log(nombre)
console.log(precio)
console.log(disponible)



//[Opción 2]Destructuring: más corto en caso de que sean múltiples
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)




//Object Literal enhacement: si el key y el value se llaman igual, se simplifica
const autenticado = true
const usuario = "Juan"

/*antes
const nuevoObjeto = {
    autenticado : autenticado,
    usuario: usuario
}*/


//después, correcto
const nuevoObjeto = {
    autenticado : autenticado,
    usuario: usuario
}

console.log(nuevoObjeto)




//objetos - manipulación
const producto = {
    nombre:"tablet",
    precio: 300,
    disponible: false
}

//Object.freeze(producto)       no permite cambiar nada
//Object.seal(producto)         sólo permite modificar (no es tan const en éste caso), no insertar ni eliminar.

//Reescribir un valor del objeto
producto.disponible = true

//Sino existe, lo añade
producto.imagen = 'imagen.jpg'

//Eliminar propiedad
delete producto.precio

console.log(producto)



/********************************Objetos - Destructuring de 2 o más objetos******************/

const producto = {
    nombre:"tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre:"Juan",
    premium: true
    direccion: {
        calle: "Calle México"
    }
}

const {nombre } = producto
const {nombre: nombreCliente, direccion: calle } = cliente //renombramos la variable

console.log(nombre)
console.log(nombreCliente)
console.log(calle) //accede al objeto --> calle: "calle México"

const {nombre: nombreCliente, direccion: {calle}} = cliente
console.log(calle) //accede al valor de calle (entra al obj y luego a calle) -->  "calle México"




/********************************UNIR 2 O MÁS OBJETOS*******************/

const producto = {
    nombre:"tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre:"Juan",
    premium: true
  
}

const carrito {
    cantidad: 1,
    ...producto     //Spread Operator: el contenido de producto se una con carrito en 1 sólo objeto
}

console.log(carrito.nombre)


//unir producto y cliente en 1 objeto

/*1ra forma, mal
const nuevoObjeto{
    producto: {...producto},
    cliente: {...cliente}
}*/

//2nda forma. 
//se podría poner ...producto pero las variables que se llaman igual se sobreescribirian y aparecería 1 vez
const nuevoObjeto{
    producto,
    cliente
}

console.log(nuevoObjeto)

//3era forma
const nuevoObjeto2 = Object.assign(producto, cliente)

console.log(nuevoObjeto2)



/* TEMPLATE STRINGS & CONCATENACIÓN */

const producto = "tablet de 12 pulgadas"
const precio = 400
const marca = "orange"

//concatenación con + o ,
console.log('El Producto es: ' + producto)
console.log( producto + $ + "dolares, marca: " + marca)

//template strings
console.log(`El producto es: ${producto}`)
console.log(` ${producto} $${precio} Dolares: marca ${marca}`)
//se pone un sólo $ para indicar que es de javaScript




/*****************************************************************ARRAYS***********************************************************/

const tecnologias = [20, 30, 40, true, "Portátil"]
console.table(tecnologias)
console.log(tecnologias[0])

//Modificar arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Node.js']
tecnologias[4] = 'Nest.js' //cambiar node a nest
tecnologias[5] = 'Nest.js' //añadirlo al final del array
tecnologias.push('Nest.js') //añadirlo al final del array, muta
console.table(tecnologias)

//para añadirlo siendo una nueva array
const newArray = [...tecnologias, 'Nest.js'] //al final
const newArray = [ 'Nest.js', ...tecnologias] //al principio

//eliminar el primer elemento del array
tecnologias.shift()


/*el filtro permite sacar elementos del array que cumplan X condición
tech es cada uno de los valores del array
Si cumple la condición lo mete en el array tecnologias2*/
const tecnologias2 = tecnologias.filter(function(tech){
    //console.log(tech)
    if(tech === 'HTML'{
        return tech
    })
})

console.log(tecnologias2)


//para modificar el array de forma que no afecte al array Original
const tecnologias2 = tecnologias.map(function(tech){
    //console.log(tech)
    if(tech === 'Node.js'){
        return 'Nest.js'
    }else{
        return tech
    }
})



//DESTRUCTURING ARRAYS 

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Node.js']

//buscar html y asignarlo a la variable
const [,,, ] = tecnologias 
console.log(reactjs)


//RECORRER ARRAYS CON EL FOR

for(let i = 0; i<tecnologias.length; i++){
    console.log(tecnologias[i])
}


//RECORRER ARRAYS CON EL FOR EACH, itera la cantidad de elementos que tiene el array
tecnologias.forEach(function(tech){
console.log(tech)
})



//RECORRER ARRAYS CON EL MAP. se itera pero genera una nueva array en funcion de la condición
const arrayMap =
tecnologias.map(function(tech){
   return tech
})



//FOR ...OF, lo mismo que for each
for(let tech of tecnologias){
    console.log(tech)
}
    






/*************************************************FUNCIONES**************************************************/


/*FUNCTION DECLARATION
si sólo le pasamos un número daría error ya que espera 2 numeros
por ello ponemos cómo default que sea = 0, para que no ocurra éste error
*/

_sumar()

function _sumar(numero1, numero2=0){
    console.log(numero1+numero2)
}


//FUNCTION EXPRESSION
const _sumar = function(numero1, numero2=0){
    console.log(numero1+numero2)
}

/*si pongo sumar() al principio funcionará ya que llamará a function declaration,
en cambio no funcionará con la expression porque se guarda en una const,
entonces primero se hace la const = función y luego se llama _sumar() para que funcione*/



//ARROW FUNCTIONS
const sumar = (numero1=0, numero2=0) => console.log(numero1+numero2)

sumar()



//FUNCIONES QUE RETORNAN VALORES

function sumar(numero1, numero2=0){
    return numero1+numero2
}

const sumar = function(numero1, numero2=0){
    return numero1+numero2
}

//function declaration & expression se necesita guardar en una variable el resultado del return
const resultado = sumar(10,20)
console.log(resultado)

//no hace falta el return 
const sumar = (numero1=0, numero2=0) => numero1+numero2



/***ARRAYS METHODS */
