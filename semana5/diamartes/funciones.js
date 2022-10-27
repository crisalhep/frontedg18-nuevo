

//una funcion es un conjunto de soluciones o ejecuciones para poder realizar tareas

//funciones expresivas

function nombreDeLaFuncion(){
//una vez declarada mi funcion todo el codigo que hagamos 
//dentro de este solo se va a ejecutar cuando la llame..

console.log("mi primera funcion")

}

nombreDeLaFuncion()

//una funcion es creada para reutilizar codigo
//una de las misiones de la funcion es poder hacer un trabajo repetitivo

function sumar(numero1, numero2){
    //primero convertir parametros a numeros
    const converNumero1 = +numero1;
    const converNumero2 = +numero2;
     
    const suma = converNumero2

} 

sumar(40, 20)

//que cosa es return
//return es la palabra clave que se encarga de retornarnos un valor

//funcion flecha la suma

const suma2 =(a,b,c,d)=>{
    return(a+b+c+d)

}
 console.log("otra forma", suma2(60,30,10,10,10))


//recapitular

//tipo de datos

let nombre ="maria";   //este es una cadena de texto "string"
let age = 34;   //number
let talla = 1.62 //number float
let boll = true // boleano
let indefinido; 
let culo = null;
let simbolo = Symbol('zcd');
let object = {};

console.log(nombre, typeof (nombre))
console.log(age, typeof (age))
console.log(boll, typeof (boll))

//cambiar tipo de datos

console.log(age, typeof toString(age))
console.log(nombre, typeof parseInt(nombre))

//tipos de datos
//funcion expresiva
function suma3 (a,b){
    return a+b
}

//funcion anonima

let restar = function(x,y){
    return x-y
}

//funciones flecha

let multiplicar =(x,y)=>{
    return x * y

}

console.log("funcion expresiva", sumar(10,10))
console.log("funcion anonima", restar(10,10))
console.log("funcion flecha", multiplicar(10,10))