//variables
//let
//const
//var - conflicto - manera global


let numero1 = 10;
let numero2 = 300;
let suma =0;

suma=numero1 + numero2;
resta=numero1 - numero2;

console.log("este es el resultado", suma)
console.log("este es el resultado", resta)
console.error("este es el resultado", suma)
console.warn("este es el resultado", suma)


//alert = es una alerta en el navegador
//console log = una funcion para el navegador, nos imprime en consola
//concatenacion = junta cadenas de texto  - junta numbre con un string

//vamos a hacer una calculadora con JavaScript
//prompt: es una ventana emergente que nos pide un valor
//y ese valor se guarda en una variable

const valor1 ={} //prompt("ingresa el valor 1")
const valor2 ={} //prompt("ingres el valor 2")

//necesitamos ingresar la operacion para el proceso
//parsear 

const operacion = "+" //prompt ("ingresa una operacion + , - , *, /")

if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado", resultadoCalculadora);
}else if(operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2;
}