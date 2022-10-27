//bucle es una estructura que se repite
//los bucles se usan mayormente para poder recorrer arrays.objetos
//leer CADA ELEMENTO DE MANERA INDEPENDIENTE
//el bucle mas usado es for =tod

//iterador => indice 
//i++
//i = i+1
//

//for(let i = 0; i <=10 ; i++){
//    console.log("iterador", i)
//}

for(let j = 10; j<= 20; j++){
    console.log("ejemplo2", j)
}

const numeros =[1,2,3,4,5,6,7,8,9,10];

for (let j = 0; j< numeros.length; j++){
    //imprimir numeros pares
    if(numeros[j] % 2===0){
        console.log(numeros[j])
    }
}

const alumnos =["pepe","pedro","diego","yubel","juan"];

for(let i = 0 ; i < alumnos.length; i++){
    console.log(alumnos[i])
}

//habra arrays de objetos

const laptops=[
{
    marca:"mac",
    precio:3500,
    nombre:"android",
},
{
    marca:"asus",
    precio:1500,
    nombre:"juan",
},
{
    marca:"acer",
    precio:4500,
    nombre:"radeon",

}

]

console.log("arrays de objetos", laptops)

//for (o = 0; 0< laptops.length; o++){
//    console.log(laptops[o].marca)
//}


//---------------
//map
//

const productos = [
    {
        name:"tv",
        price:1800,
    },
    {
        name:"celular",
        price:900,
    },
    {
        name:"monitos",
        price:200,
    }
]

productos.map((productos,index)=>{
    console.log("indice",index);
    console.log("producto", productos.name)
})

//-------------------------
//bucle WHILE

//tambien sirve para poder hacer una accion en un numero determinado de veces
//es un buclw

let contador = 0;
while(contador<5){
    console.log("contador", contador);
//no se olvide de alterar el contador en cada vuelta
contador++;    
}

//escribir un programa que al usar una palabra se muestra en la pantalla 10 veces

const imprimirDiezVeces = (palabra)=>{
    let contador = 0;
    while(contador <20){
        console.log(palabra);
        contador++
    }
}

imprimirDiezVeces("hola mundo")


//---------------------------
//for each

//es una mezcla del map o del for 
//recorre arrays

const numeros2=[1,2,3,4,5,6,7,8,9,10]

numeros2.forEach((numeros2, index)=>{
    
    console.log("que hace", numeros2)
    return numeros2 *2;
})

const productos2 =[
    {
        name:"cristian",
        price:1000,
    },
    {
        name:"pepe",
        price:200,
    },
    {
        name:"daniel",
        price:500,
    },
];

productos2.forEach((productos2)=>{
    console.log(productos2)
})

productos2.forEach((productos2)=>console.log(productos2.price))