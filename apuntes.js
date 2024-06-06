
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







/********************************Objetos - Destructuring de 2 o más objetos************************************/


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




/*********************************************UNIR 2 O MÁS OBJETOS**********************************************/


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







/**********************************************************ARRAYS********************************************************/


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







/********************************************************ARRAYS METHODS *****************************************/


//sin arrow function
const tecnologias2 = tecnologias.filter(function(tech){
    //console.log(tech)
    if(tech === 'HTML'{
        return tech
    })
})

//con arrow function: filtrar sólo etiqueta html
const nuevoArray = tecnologias.filtrer((tech) =>  tech === 'HTML')

//ejemplo2: filtrar diferente a 10
const numeros = [10,20,30]
const resultado = numeros.filtrer(numero => numero !== 10)



//INCLUDES. si existe un elemento en el array
const resultado = tecnologias.includes('CSS')


//SOME - Devuelve si alemnos uno cumple la condición. true or false
const resultado = numeros.some(numero => numero > 15)
if(resultado){
    console.log('si hay elementos')
}else{
    console.log('no hay elementos')
}


//FIND - Devuelve el primer elemento que cumple la condición
const resultado = numeros.find(numero => numero > 15)   


//EVERY - Retorna true or false si todos cumplen la condición
const resultado = numeros.every(numero => numero > 5)


//REDUCE - Retorna un acumulado total (el 0 es el valor inicial)
const resultado = numeros.reduce((total, numero) => total + numero, 0)









/******************************************************CONDICIONALES *****************************************/


const auth = true

if (!auth){//si es false
    console.log('No tienes permiso, inicia sesión')

}else{//sino, siendo true:
    console.log('Acceso al sistema...')
}

/**operadores
 * >
 * <
 * >=
 * <=
 * ==   sólo revisa si los valores son iguales y no su tipo de dato. ej: el num 20 & string "20" -> true
 * ===  igual estricto. revisa si es igual su valor y su tipo de dato. en el ejemplo -> false
 * !==  diferente a
 * ||   or
 * &&   and
 * 
 */



//OPERADORES TERNARIOS
const saldo = 2000
const pagar = 1200
const tarjeta = true

/*en vez de tener

if (saldo > pagar){
    console.log('Sí puedes pagar')
}else{
    console.log('No puedes pagar')
}

se pone la [condición] seguido entonces [?] [si es true/se cumple] : [sino false]

ej sencillo*/
saldo > pagar ?
    console.log('Sí puedes pagar') : 
    console.log('No, no puedes pagar') 

//ejemplo2 
saldo > pagar ?
    console.log('Sí puedes pagar') : 
    tarjeta ?
        console.log('Puedes pagar con tarjeta') :
        console.log('No, no puedes pagar') 

//ejemplo simplificado
saldo > pagar || tarjeta ?
    console.log('Sí puedes pagar') : 
    console.log('No, no puedes pagar') 



//OPTIONAL CHAINING (?)                 Mira si existe, sino pasará

const alumno = {
    nombre: 'Juan'
    clase: 'Programacion 1',
    aprobado : true,
    examenes : {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)
console.log('Después')


//NULLISH COALESCING OPERATOR (??)       Devuelve el valor de la derecha si:  es nulo o undefined la izquierda y viceversa
//devolveria 10
const pagina = 10 ?? 1
console.log(pagina)

//devolveria 1
const pagina = null ?? 1



//EVALUACIÓN DE CORTOCIRCUITO
//Si cumple la condición, que haga esto. Revisar una condición y ejecutar un código
const auth = true
auth && console.log('Usuario autenticado')








/****************************************************ECMAScript***********************************************/


/*para en el html tener en 1 sola lína <script><script> 
los archivos de las funciones creadas y el archivo que se pasan los parametros para llamar a las funciones*/

//archivo html
<script src="ruta" type="module"> </script>


//Archivo exportar funciones
export function sumar(n1, n2){
    return n1 + n2
}

export function restar(n1, n2){
    return n1 - n2
}

//o export{sumar, restar}


//improtar funciones
import {sumar, restar} from './funciones.js'

const resultado = sumar(10, 20)
console.log(sumar)


/*luego estan los export default dónde a la hora de poner el import [nombreQDeseas], {} from ..
hay que ponerle un nombre en el import y no hay que ponerlo entre {} la función, ya que es por default
Sólo puede haber 1 export default

arrow funcitons */

export const sumar = (n1, n2) => n1 + n2
export const multiplicar = (n1, n2) => n1 * n2

export default multiplicar




/******************************************** FETCH API con PROMISES *********************************************/

/*Puede ser con función o sin.
Accede a una consulta url, si existe, hay respuesta quiero los datos cómo json y los muestra,
 de lo contrario salta al error con su mensaje */

const url = 'Https://.../comments'

fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Hubo un error')
    })

    .then(data => console.log(data))
    .then(error => console.log(error.message))




/******************************************** FETCH API con ASYNC / AWAIT  *********************************************/


const consultarAPI = async () => {

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Hubo un error')
        }

        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error.message)
    }
}




/******************************* MEDIR PERFORMANCE & MANEJAR MÚLTIPLES CONSULTAS *************************************/


/*para no tener dentro repeticiones que hacen el código largo ejemplo*/


const consultarAPI = async () => {

    try {
        const inicio = performance.now()

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const response2 = await fetch(url2)
        const data2 = await response2.json()
        console.log(data2)

        const response3 = await fetch(url3)
        const data3 = await response3.json()
        console.log(data3)


        const fin = performance.now()
        console.log(`El resultado és ${fin - inicio} ms`)
    } catch (error) {
        console.log(error)
    }
}



//Lo simplificaremos así

const consultarAPI = async () => {

    try {
        const inicio = performance.now()

        const [response, response2, response3]  = await Promise.all ([fetch(url), fetch(url2), fetch(url3)],)
        const [data, data2, data3] = await Promise.all ([response.json(), response2.json(), response3.json()])


        console.log(data)
        console.log(data2)
        console.log(data3)


        const fin = performance.now()
        console.log(`El resultado és ${fin - inicio} ms`)
    } catch (error) {
        console.log(error.message)
    }
}









/******************************* DOM SELECCIONAR ELEMENTOS ************************************************/


const heading = document.querySelector('.claseHeading')
                        .querySelectorAll
                        .getElementById

console.log(heading) //acceder a los atributos que tiene un elemento
console.log(heading.tagName) //h1
console.log(heading.texContent)
console.log(heading.classList) //ver las clases que tiene dentro
console.log(heading.id)

//selecciona todos los enlaces <a> que hay dentro de .navegacion
const enlaces = document.querySelectorAll('.navegacio a')




/******************************* MANIPULAR ELEMENTOS HTML CON JS *******************************************/


//cambiar su contexto por otra cosa
heading.texContent = 'Un nuevo heading...'
heading.id = 'Nuev id'

//elimina el attributo .class
heading.removeAttribute('class') 


<input type = "text" value="" ></input>
const inputNombre = document.querySelector('#id')
inputNombre.value = 'Nuevo valor'


//En una colección, para cambiar 1 de los 4 enlaces se hace accediento por una array
enlaces[0].textContent = 'Nuevo Enlace'

//si se quiere cambiar todos se usará un forEach
enlaces.forEach(enlace => enlace.textContent = 'Nuevo contxt a todos')




/******************************* EVENTOS DEL DOM - CLICKS  ***********************************************/


//cambiar el texto del heading al hacer click
const heading = document.querySelector('.heading') //seleccionamos

heading.addEventListener('click', () => {          //de los eventos (click) cuando se haga, realizar un arrow function(){}
    heading.texContent = 'Nuevo txt en el heading'
})

/*otros eventos: moussenter               (hover), 
                mouseleave              (para salir) */


//cambiar el texto del CONSOLE LOG a una sère de links, una array
enlaces.forEach(enlace =>{
    enlace.addEventListener('click', () = {
            console.log('click en un enlace')
    })
})

//(e) es la información sobre el evento que se está llevando a cabo, y vamos a ver info del target
enlaces.forEach(enlace =>{
    enlace.addEventListener('click', (e) = {
            console.log(e)
            console.log(e.target)
            
            //otra cosa
            e.preventDefault() //los enlaces <a> tienen una accion pro defecto que es visitar en enlace, con esto evitas su acción default
            e.target.texContent = 'Cambiaste el contxt'
    })
})





/******************************* EVENTOS DEL DOM - INPUTS  ************************************************/


//en la consola ver qué escribe el usuario por ejemplo en una casilla de formulario
const inputNombre = docuemnt.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
    console.log(e.target.value.length) //para ver la extensión de lo que se ha escrito
})


//a la hora de introducir un pw que se muestre al principio y al milisegundo cambie por · para que no se vea
const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword) //otra forma de introducir una función
function functionPassword(){
    inputPassword.type = "text"

    setTimeout(() =>{
        inputPassword.type = 'password'
    }, 300)
}




/******************************* EVENTOS DEL DOM - SUBMIT  *************************************************/


const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    //console.log('Enviando Formulario...')

    //validacion
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    if(nombre === '' || password === ''){
        console.log('Todos los campos son obligatorios')
    }else{
        console.log('todo bien, iniciando sesión')
    }
})




/******************************* VALIDANDO FORMULARIO & MOSTRANDO ALERTAS ****************************************/




const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
  
    //seleccionamos su contenido para luego generar la alerta
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value


    //prevenir nuevas y multiples alertas de forma que si ya existe, la quitamos
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    //creamos nuestra alerta
    const alerta = document.createElement('DIV') 

    //le agregamos las classes
    alerta.classList.add('classe1', 'text-black', 'uppercase', 'text-center', 'font-black') 


    //generamos nuestras alertas
    if(nombre === '' || password === ''){ 
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent = 'Todo bien, iniciando sesión' //en caso correcto, mensaje de color verde
        alerta.classList.add('bg-green-500')
    }

    //para visualizarlo en html, no consola, creamos un hijo de formulario que es lo que hemos creado
    formulario.appendChild(alerta) 

    setTimeout(() => {
        alerta.remove()
    }, 3000);
})



// WEB EVENTOS -> CLICK, INPUT, ETC..
https://developer.mozilla.org/es/docs/Web/API/Element