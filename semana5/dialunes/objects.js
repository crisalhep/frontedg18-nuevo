//que es un objeto?
//es una identidad independiente, la cual tiene propiedades y atributos.
//esta compuesto por un (keys) y un values



//el objeto es un carro

const carro ={
    color: "azul",
    motor: 1.6,
    modelo: "mustang",
    marca:"changan",
    nuevo: false,

};

console.table(carro)


//object persona

const persona ={
    edad:34,
    nombre: "panfilo",
    sexo:"masculino",
    talla:1.74,
    estadoCivil:"casado",
    mayorEdad: "true",
    donacionOrganos: "true",   
}


//como acceder a un atributo

console.log("nombre",persona.estadoCivil)
console.log("persona", persona)

//como sustituirlo
persona.nombre = "guillermo";


//agregar un elemento = key y el value

persona["profesion"] = "ingeniero"
persona["bailarin"]= true;
persona.nacionalidad= "ucraniano"